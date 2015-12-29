import AppDispatcher from '../dispatcher/AppDispatcher';
import BillConstants from '../constants/BillConstants';

// Define actions object
const BillActions = {

  // Receive inital bill data
  receiveData: function(data) {
    AppDispatcher.handleAction({
      actionType: BillConstants.LOAD_DATA,
      data: data
    })
  }
};

export default BillActions;
