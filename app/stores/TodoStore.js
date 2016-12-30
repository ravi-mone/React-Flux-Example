import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import _ from 'lodash';

var todos = [];

function addTodo(val) {
  todos.push(val);
  TodoStore.emitChange();
}

function removeItem(id) {
  todos.splice(id,1);
  TodoStore.emitChange();
}

function fetchAllTodos() {
  todos=[];
  TodoStore.emitChange();
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var TodoStore = _.extend({}, EventEmitter.prototype, {
  // Return cart items
  getTodoItems: function () {
    console.log('getTodos : ', todos)
    return todos;
  },
  // Emit Change event
  emitChange: function () {
    this.emit('change');
  },
  // Add change listener
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  // Remove change listener
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
  var action = payload.action;

  console.log('IN STORES :', action)
  var text;
  switch (action.actionType) {
    case 'ADD_TODO_ITEM':
      console.log(action);
      addTodo(action.payload);
      break;

    case 'DELETE_TODO_ITEM':
      console.log(action);
      removeItem(action.id);
      break;

    case 'FETCH_TODO_ITEMS':
      console.log(action);
      fetchAllTodos();
      break;
    default:
      return true;
  }
  // If action was responded to, emit change event
  TodoStore.emitChange();
  return true;
});
export default TodoStore;
