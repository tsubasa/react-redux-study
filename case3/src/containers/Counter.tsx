import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as counterActions from '../actions/counter';
import { ICounterState } from '../reducers/counter';
import Counter from '../components/Counter';

const mapStateToProps = (state: { counter: ICounterState }) => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  incrementCounter: () => dispatch(counterActions.incrementCounter()),
  resetCounter: () => dispatch(counterActions.resetCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
