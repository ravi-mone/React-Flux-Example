import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import _ from 'lodash';
import axios from 'axios';

var _users = [];

function makeAllCaps(_users){
    return _users.map(function(user){
        user.name = (user.name).toUpperCase();
      return user;
    })
}


function fetchUserData(action){
    axios.get(`http://www.mocky.io/v2/5864a5511100007c03cf8ccc`)
        .then( (response)=>{
            _users = response.data;
            _users = makeAllCaps(_users);
             UserStore.emitChange();
        })

}


// Extend Cart Store with EventEmitter to add eventing capabilities
var UserStore = _.extend({}, EventEmitter.prototype, {
  // Return cart items
  getUsers: function () {
    console.log('getUsers : ', _users)
    return _users;
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
    case 'FETCH_USER_DATA':
        fetchUserData(action);
      break;
    default:
      return true;
  }
  // If action was responded to, emit change event
  UserStore.emitChange();
  return true;
});
export default UserStore;
