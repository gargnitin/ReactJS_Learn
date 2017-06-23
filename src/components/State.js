import React from 'react';

export class SharedState extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		//alert(event.target.value);
		this.props.onNameChange(event.target.value);
	}

	render(){
		const fname= this.props.fname;
		return(
				<label>
		          Name:
		          <input name="fname" type="text" value={fname} onChange={this.handleChange} />
		        </label>
			);
	}
}