import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as counterActions from '../actions/counter';

// types
export interface ICounterState {
  count: number;
}

// state
const initialState: ICounterState = {
  count: 0
};

// reducers
export const counter = reducerWithInitialState(initialState)
  .case(counterActions.incrementCounter, state => {
    return {
      ...state,
      count: state.count + 1
    };
  })
  .case(counterActions.resetCounter, state => initialState);
