"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect');
//var open = require('gulp-open');
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');

var config = {
    port: 9005,
    baseurl: "http://localhost",
    path: {
        html: "./src/*.html",
        dist: "./dist",
        js : "./src/*.js",
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        mainJs: './src/index.js'
    },
    injectConfig : {
            destAllJs : './dist/scripts/*.js',
            destAllCss : './dist/css/*.css',
            destAllHtml : './dist/*.html'
        },
};

function cleanup(folderpath){
    return gulp.src(folderpath, {read : false})
        .pipe(clean());
}

gulp.task('browser-sync', ['connect'], function() {
    browserSync.init({
        proxy: config.baseurl + ":" + config.port + "/"
    });
    
    //browserSync(options);
});

gulp.task('connect', ['inject'], function (){
     connect.server({
        root: ['dist'],
        port: config.port,
        base: config.baseurl
    });
});

/*
gulp.task('open', ['connect'], function (){
    gulp.src('dist/index.html')
    .pipe(open({
        uri: config.baseurl + ":" + config.port + "/"
    }));
});
*/

gulp.task('inject', ['html'], function(){
    var sources = gulp.src([config.injectConfig.destAllJs, config.injectConfig.destAllCss], {read: false});
    return gulp.src(config.injectConfig.destAllHtml)
    .pipe(inject(sources, {relative : true}))
    .pipe(gulp.dest(config.path.dist))

});

gulp.task('html', ['js','css'], function(){
    cleanup(config.injectConfig.destAllHtml);

    return gulp.src(config.path.html)
    .pipe(gulp.dest(config.path.dist))
});

gulp.task('css', function() {
   cleanup(config.injectConfig.destAllCss);

    return gulp.src(config.path.css)
        .pipe(plumber())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.path.dist + '/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', [], function() {
    //cleanup(config.injectConfig.destAllJs);
    var stream = browserify(config.path.mainJs)
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(plumber())
        //.on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.path.dist + '/scripts'))
        .pipe(browserSync.stream());

    return stream;
});
          
gulp.task('watch', ['browser-sync'], function(){
    var watcher = gulp.watch(config.path.js, ['js']).on('change', browserSync.reload);        
    var cssWatcher = gulp.watch(config.path.css, ['css']).on('change', browserSync.reload);
    var htmlWatcher = gulp.watch(config.path.html, ['inject']).on('change', browserSync.reload);
    
    watcher.on('change', function(event){
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    }) 
    
    cssWatcher.on('change', function(event){
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    })
    
    htmlWatcher.on('change', function(event){
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    })
});

gulp.task('default', ['watch']);