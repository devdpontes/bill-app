import React from 'react';

const { Component } = React;

class Subscriptions extends Component {
  render() {
    let data = this.props.data;

    let subscriptions = data.subscriptions.map(function(item, index) {
      return (<div className={"row"} key={index}>
        <span className={"item"}>{item.name}</span>
        <span className={"value"}>£{item.cost}</span>
      </div>);
    });

    return (
      <div>
        {subscriptions}
        <div className={"row emphasis"}>
          <span className={"item h4"}>Total</span>
          <span className={"value"}>£{data.total}</span>
        </div>
      </div>
    );
  }
}

class CallCharges extends Component {
  render() {
    let data = this.props.data;

    let calls = data.calls.map(function(item, index) {
      return (
        <tr key={index}>
          <td>{item.called}</td>
          <td>{item.duration}</td>
          <td className={"last"}>£{item.cost}</td>
        </tr>
      );
    });

    return (
      <table className={"calls-table"}>
        <thead>
          <tr>
            <th>Called</th>
            <th>Duration</th>
            <th className={"last"}>Cost</th>
          </tr>
        </thead>
        <tbody>
          {calls}
          <tr className={"emphasis"}>
            <td colSpan="2">Total</td>
            <td className={"last"}>£{data.total}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Skystore extends Component {
  render() {
    let data = this.props.data;

    let buys = data.buyAndKeep.map(function(item, index) {
      return (<div className={"row"} key={index}>
        <span className={"item"}>{item.title}</span>
        <span className={"value"}>£{item.cost}</span>
      </div>);
    });

    let rentals = data.rentals.map(function(item, index) {
      return (<div className={"row"} key={index}>
        <span className={"item"}>{item.title}</span>
        <span className={"value"}>£{item.cost}</span>
      </div>);
    });

    return (
      <div>
        <div className={"row"}>
          <h3>Buy and Keep</h3>
          {buys}
        </div>
        <div className={"row"}>
          <h3>Rentals</h3>
          {rentals}
        </div>
        <div className={"row emphasis"}>
          <span className={"item h4"}>Total</span>
          <span className={"value"}>£{data.total}</span>
        </div>
      </div>
    );
  }
}

//  Bill view
class Bill extends Component {

  // Render bill view
  render() {
    let data = this.props.data;
    let result;
    console.log(data);

    if (data) {
      result = (
        <div>
          <header className={"content-section"}>
            <div className={"row"}>
              <div className={"item"}>
                <div className={"label"}>Payment due date</div>
                <div className={"h2"}>{data.statement.due}</div>
              </div>
              <div className={"value"}>
                <div className={"label"}>Bill total</div>
                <div className={"h2"}>£{data.total}</div>
              </div>
            </div>
          </header>
          <section className={"content-section"}>
            <header className={"content-header emphasis"}>
              <h2>Subscriptions</h2>
            </header>
            <div className={"h4"}>{data.statement.period.from} - {data.statement.period.to}</div>
            <Subscriptions data={data.package}/>
          </section>
          <section className={"content-section"}>
            <header className={"content-header"}>
              <h2>Call charges</h2>
            </header>
            <CallCharges data={data.callCharges}/>
          </section>
          <section className={"content-section"}>
            <header className={"content-header"}>
              <h2>Sky store</h2>
            </header>
            <Skystore data={data.skyStore}/>
          </section>
          <div className={"disclaimer"}>Statement date: {data.statement.generated}</div>
        </div>
      )
    } else {
      result = (<p>Loading bill...</p>);
    }

    return (
      <div className={"bill-container"}>
        <h1>Your Bill</h1>
        {result}
      </div>
    );
  }
}

export default Bill;
