import React from 'react';
import {UserForm} from './userForm';
import {UserList} from './UserList';
import AppActions from './AppActions';
import AppStore from './AppStore'

let arr = [];

export class UserComponents extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			users : [],
			firstname : '',
			names : ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.onSubmit = this.onSubmit.bind(this);
        this.onRemove = this.onRemove.bind(this);

	};

	 componentDidMount() {
        AppStore.addChangeListener('STORE_Submit_User', this.onSubmit);
        AppStore.addChangeListener('STORE_Delete_User', this.onRemove);
    }

	handleSubmit(event){
		/*var user = {
			name : this.state.firstname
		};
		arr.push(user);

		this.setState({
			users : arr
			});
		*/

		AppActions.SubmitUser(this.state.firstname);
		event.preventDefault();
	}


	handleChange(name){
		this.setState({
			firstname : name
			});
	}


	onRemove() {
        this.listUsers()
    }


    onSubmit() {
         this.listUsers()
    }

    listUsers(){
    	this.setState({
			users : AppStore.getAll()
			});
    }

	componentWillUnmount() {
        AppStore.removeChangeListener('STORE_Submit_User', this.onChange)
        AppStore.removeChangeListener('STORE_Delete_User', this.onRemove)
    }

	render(){ 
		return(
			<div>
				<UserForm onSubmit={this.handleSubmit} onDataChange={this.handleChange}/>
			 	<UserList users={this.state.users} onUserRemove={this.handleSubmit2}/>
			 </div>
			);
	}

}