import * as React from 'react';
import Button from './Button';

// types
interface IProps {
  count: number;
  incrementCounter: () => void;
  resetCounter: () => void;
  asyncIncrementCounter: () => void;
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

        <div style={{ marginBottom: 6 }}>
          <Button size="sm" onClick={this.props.incrementCounter}>
            +1
          </Button>
          <Button size="sm" onClick={this.props.asyncIncrementCounter}>
            async +1
          </Button>
          <Button size="sm" onClick={this.props.resetCounter}>
            RESET
          </Button>
        </div>

        <div style={{ marginBottom: 6 }}>
          <Button onClick={this.props.incrementCounter}>+1</Button>
          <Button onClick={this.props.asyncIncrementCounter}>async +1</Button>
          <Button onClick={this.props.resetCounter}>RESET</Button>
        </div>

        <div>
          <Button size="lg" onClick={this.props.incrementCounter}>
            +1
          </Button>
          <Button size="lg" onClick={this.props.asyncIncrementCounter}>
            async +1
          </Button>
          <Button size="lg" onClick={this.props.resetCounter}>
            RESET
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
