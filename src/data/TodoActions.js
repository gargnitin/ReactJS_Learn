import TodoDispatcher from './TodoDispatcher';
import TodoActionTypes from './ToDoActionTypes'

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },
};

export default Actions;