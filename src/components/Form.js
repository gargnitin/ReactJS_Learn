import React from 'react';
import {SharedState} from './State';

export class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				firstname : 'nitin',
				desc : 'provide description here'
				};

		this.handleChange = this.handleChange.bind(this);
		this.handleAreaChange = this.handleAreaChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(event){
		alert("name is submitted " + this.state.firstname + " and " + this.state.desc);
		event.preventDefault();
	}

	handleChange(event){
		//alert(event.target.value);
		//let name = event.target.name;
		//this.setState({value : event.target.value});
		this.setState({[event.target.name] : event.target.value});
	}

	handleAreaChange(name){
		//alert(name);
		this.setState({firstname : name});
	}

	render(){
		return(
				<form onSubmit={this.handleSubmit}>
		        <label>
		          Name:
		          <input name="firstname" type="text" value={this.state.firstname} onChange={this.handleChange} />
		        </label>
		        <label>
		          Desc:
		          <textarea name="desc" value={this.state.desc} onChange={this.handleChange} />
		        </label>
		        <SharedState fname={this.state.firstname} onNameChange={this.handleAreaChange}/>
		        <input type="submit" value="Submit" />
		      </form>
			);
	}
}