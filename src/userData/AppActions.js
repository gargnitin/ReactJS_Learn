import AppDispatcher from './AppDispatcher';

class AppActions{
	SubmitUser(name){
		AppDispatcher.dispatch({
			actionType : "Submit_User",
			value : name
		});
	}

	DeleteUser(id){
			AppDispatcher.dispatch({
				actionType : "Delete_User",
				value : id
		});
	}
}

export default new AppActions()