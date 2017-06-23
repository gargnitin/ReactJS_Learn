import React from 'react';
import ReactDOM from 'react-dom';
import {Events} from './components/Events';
import {Form} from './components/Form';
import {SharedState} from './components/State';
import {UserComponents} from './userData/userComponent';
/*
function getGreeting(user){
	if(user){
		return <h1> {user.name} </h1>
	}
	else{
		return <h1> no name </h1>
	}
}

var user = {
	name : "nitin",
	age : "40"
};
*/

/*
ReactDOM.render(
  getGreeting(user),
  document.getElementById('app')
  );*/

/*
function Welcome(props){
	return (
			<div>
				<h1> {props.author.name} </h1>
				<Welcome1 age={props.author.age} />
			</div>
		);	
}

function Welcome1(props){
	return <h2> {props.age} </h2>;
}

const element = <Welcome author={user}/>;

  ReactDOM.render(
  	element,
  	document.getElementById('app')
  );*/

/*
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function printClock(){
	ReactDOM.render(
  		<Clock date={new Date()}/>,
  		document.getElementById('app')
  	);

}

 setInterval(printClock, 1000);*/
/*
class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {date : new Date()};
	}

	tick(){
		this.setState({
			date : new Date()
		});
	}

	componentDidMount(){
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount(){
    	clearInterval(this.timerID);
	}

	render(){
		return (
		    <div>
		      <h1>Hello, world!</h1>
		      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
		    </div>
		  );
	}
}


ReactDOM.render(
  	<Clock />,
  	document.getElementById('app')
  );

*/
 
 /*
class Events extends React.Component{
	constructor(props){
		super(props);
		this.state = {isToggleOn : true};
		this.clickButton = this.clickButton.bind(this);
	}

	clickButton(){
		this.setState(prevState => ({
      		isToggleOn: !prevState.isToggleOn
    	}));
	}

	render(){
		return(
				<button onClick={this.clickButton}>{this.state.isToggleOn ? 'ON' : 'OFF'}
      			</button>
			);
	}
}
*/

ReactDOM.render(
    <UserComponents />,
    document.getElementById('app')
);