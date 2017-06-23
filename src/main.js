//$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');
var Test = require('./components/Test');


/*
ReactDOM.render(
  <h1>Hello, world! this is app</h1>,
  document.getElementById('app')
);*/



/*var MessageComponent = React.createClass({
  render: function() {
    return (
      <div>{this.props.message}</div>
    );
  }
});*/

function Greetings(props){
  return(
      <h1> hello {props.Name}, this is react app component</h1>
    );
}

ReactDOM.render(
  <Greetings Name="Nitin" />,
  document.getElementById('app')
  );

/*
// Render an instance of MessageComponent into document.body
ReactDOM.render(
    <Test isVaccancy="false"/>,
    document.getElementById('app')
);
*/
/*
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('app')
  );
}

setInterval(tick, 5000);

*/

/*
var CowClicker = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  onCowClick: function(evt) {
    this.setState({
      clicks: this.state.clicks + 1
    });
  },

  render: function() {
    return (
      <div>
        <div>Clicks: {this.state.clicks}</div>
        <img
          src="http://s3.bypaulshen.com/buildwithreact/cow.png"
          onClick={this.onCowClick}
          className="cow"
        />
        <p>Click the cow</p>
      </div>
    );
  }
});

ReactDOM.render(
  <CowClicker />,
  document.getElementById('app')
);*/

/*
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);*/