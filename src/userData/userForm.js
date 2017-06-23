import React from 'react';

export class UserForm extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}


	handleSubmit(event){
		//alert(event.target.value);
		event.preventDefault();
		this.props.onSubmit(event);

	}


	handleChange(event){
		//alert(event.target.value);
		this.props.onDataChange(event.target.value);
	}

	
	render(){
		return(
				<form onSubmit={this.handleSubmit}>
		        <label>
		          Name:
		          <input name="firstname" type="text" onChange={this.handleChange}/>
		        </label>
		        <input type="submit" value="Submit" />
		      </form>
			);
	}
}