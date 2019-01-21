import { CounterActions, ICounterActions } from '../actions/counter';

// types
export interface ICounterState {
  count: number;
}

// reducers
export const counter = (state: ICounterState = { count: 0 }, action: ICounterActions) => {
  switch (action.type) {
    case CounterActions.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      };
    case CounterActions.RESET_COUNTER:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};
