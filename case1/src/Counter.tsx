import * as React from 'react';

// types
interface IState {
  count: number;
}

// components
class Counter extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    // stateの初期値を指定
    this.state = {
      count: 0
    };

    // thisをbindしてhandleClickIncrementからstateを参照できるようにする
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
  }

  public render() {
    return (
      <React.Fragment>
        Counter: {this.state.count} / <button onClick={this.handleClickIncrement}>+1</button>
      </React.Fragment>
    );
  }

  // インクリメントする処理
  private handleClickIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }
}

export default Counter;
