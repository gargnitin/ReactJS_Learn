var React = require('react');

var Child = function() {
    function render() {
        return ( 
            <div className = "jumbotron" >
            <p> This is child component. < /p> 
            </div>				
        );
    }

    return {
        render: render
    };
};

module.exports = Child;
