var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var AppDispatcher = new Dispatcher();
console.log("AppDispatcher : ", AppDispatcher)
// Convenience method to handle dispatch requests

AppDispatcher.handleAction = function (action) {
    console.log('HERE : ', action)
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
}

export default AppDispatcher;
