import AppDispatcher from '../dispatcher/AppDispatcher';
import DefaultStore from './DefaultStore';
import BillConstants from '../constants/BillConstants';

// Extend BillStore with DefaultStore to add eventing capabilities
class BillStore extends DefaultStore {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  // Method to load data to the store state
  setData(data) {
    this.state.data = data;
  }

  getData() {
    return this.state.data;
  }
}

let billStore = new BillStore();

billStore.dispatchToken = AppDispatcher.register(payload => {
  // Register callback with AppDispatcher
  let action = payload.action;
  let text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case BillConstants.LOAD_DATA:
      billStore.setData(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  billStore.emitChange();
});

export default billStore;
