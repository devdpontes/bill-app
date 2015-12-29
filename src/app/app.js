import React from 'react';
import BillStore from './stores/BillStore';
import BillActions from './actions/BillActions';
import Bill from './components/Bill';
import BillDataSource from './dataSources/BillDataSource';

const { Component } = React;

// Define main Controller View
class App extends Component {
  constructor() {
    super();
    this.init();
    this.state = {};
    this._onChange = this._onChange.bind(this);
  }

  // Init method to keep the constructor cleaner
  init() {
    BillDataSource.loadData().then((data) => {
      if (data) {
        BillActions.receiveData(data);
      } else {
        console.log('error');
      }
    });
  }

  // Method to retrieve state from Stores
  updateState() {
    return {
      billData: BillStore.getData()
    };
  }

  // Add change listeners to stores
  componentDidMount() {
    BillStore.addChangeListener(this._onChange);
  }

  // Remove change listers from stores
  componentWillUnmount() {
    BillStore.removeChangeListener(this._onChange);
  }

  // Method to setState based upon Store changes
  _onChange(action) {
    this.setState(this.updateState());
  }

  // Render components, passing state via props
  render() {
    return (
      <div className="app">
        <Bill data={this.state.billData} />
      </div>
    );
  }
}

export default App;
