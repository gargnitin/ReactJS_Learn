import React from 'react';
import AppActions from './AppActions';


let call = null;

export class UserList extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		call = this;
	}

	handleClick(key){
		//call.props.onUserRemove(key);
		AppActions.DeleteUser(key);
	}

    render() {
        var users = this.props.users != undefined ? 
        this.props.users.map((user,i) => {
            return <li key={i}> User {i+1}:{user.name} 
            			 <button onClick={() => this.handleClick(i)}> x </button>
                        
                  </li> 
        }) :[];
        
        return (
            <div>
                <h1>Users</h1>
                <ul>
                    {users} 
                </ul>
            </div>
        );
    }
}

