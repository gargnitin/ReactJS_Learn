import React from 'react';

class MyChild2{
	constructor(){

	}

	displayLastName(name){
		return "name is " + name;
	}
}


export class MyChild extends React.Component{
	constructor(props){
		super(props);
	}

	display(){
		let name = new MyChild2().displayLastName("garg");	
		return name;
	}
	//let e = new MyChild2();
	

	render(){
		return(
				<div>
					this is My Child 
					<MyChild1 firstName = "nitin"/>
					{this.display()}

				</div>
			);	
	}
};

class MyChild1 extends React.Component{
	displayFirstName(){
		return <div> My name is {this.props.firstName} </div>
	}

	render(){
		return (
				<div> 
					this is second child {this.props.firstName}
					{this.displayFirstName()}
				</div>

			)
	}
}

