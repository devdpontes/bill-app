import Flux from 'flux';

// Create dispatcher instance
let AppDispatcher = new Flux.Dispatcher();

// Convenience method to handle dispatch requests
AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

export default AppDispatcher;
