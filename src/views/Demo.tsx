import React, { Component } from "react";
import "./Demo.css";

import { inject, observer } from "mobx-react";

import { countStoreProps, appStore } from "../store";

interface Props {
  count?: countStoreProps;
}

class Demo extends Component<Props> {
  private count = this.props.count!;
  render() {
    return (
      <div className="mobx-demo">
        <h1>count: {this.count.counter}</h1>
        <button onClick={this.count.increment}>increment</button>
        <button onClick={this.count.decrement}>decrement</button>
      </div>
    );
  }
}

export default inject((store: appStore) => ({
  count: store.count
}))(observer(Demo));
