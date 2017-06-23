import AppDispatcher from './AppDispatcher';
import { EventEmitter } from 'events';

let _users = [];
class AppStore extends EventEmitter {

	constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

   addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    submitUser(name){
		var user = {
			name : name
		};
		_users.push(user);
    }

    removeUser(key){
    	_users.splice(key,1);
    }


    getAll(){
    	return _users;
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'Submit_User':
                this.submitUser(action.value);
                break;
            case 'Delete_User':
                this.removeUser(action.value);
                break;
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new AppStore();