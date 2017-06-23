var React = require('react');
var Child = require('./Child');
import {MyChild} from './NewChild';

export class Events extends React.Component{
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
				<div>
					<button onClick={this.clickButton}>{this.state.isToggleOn ? 'ON' : 'OFF'}
      				</button>
      				<Child />
      				<MyChild />
      			</div>
			);
	}
}