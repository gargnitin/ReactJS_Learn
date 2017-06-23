var React = require('react');
var Child = require('./Child');


var Test = function(){
    
    function buttonClick(e){
        e.preventDefault();
        console.log("button clicked");
    }

	function render() {
		if(this.props.isVaccancy == "true"){
			return (
				
					<div className="jumbotron">
    					<h1>This is admin list {this.props.isVaccancy}</h1>
						<p>React, React Router, and Flux for ultra-responsive web apps.</p>
					</div>	
				
			);
		}
		else{
			return(
                <div>
				    <p> no list here</p>
                    <Child />
                    <a href="#" onClick={buttonClick}> Click me </a>
                </div>
			);
		}

	}

	return {
		render : render
	};
};
	


module.exports = Test;