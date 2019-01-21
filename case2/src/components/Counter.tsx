import * as React from 'react';

// types
interface IProps {
  count: number;
  incrementCounter: () => void;
  resetCounter: () => void;
}

// components
class Counter extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <React.Fragment>
        <div>Counter: {this.props.count}</div>
        <div>
          <button onClick={this.props.incrementCounter}>+1</button>
          <button onClick={this.props.resetCounter}>RESET</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
