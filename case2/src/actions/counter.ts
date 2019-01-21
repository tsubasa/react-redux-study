import { Action } from 'redux';

// types
export enum CounterActions {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  RESET_COUNTER = 'RESET_COUNTER'
}

interface IIncrementCounterAction extends Action {
  type: CounterActions.INCREMENT_COUNTER;
  payload: {};
}

interface IResetCounterAction extends Action {
  type: CounterActions.RESET_COUNTER;
  payload: {};
}

export type ICounterActions = IIncrementCounterAction | IResetCounterAction;

// actions
export const incrementCounter = (): IIncrementCounterAction => ({
  type: CounterActions.INCREMENT_COUNTER,
  payload: {}
});

export const resetCounter = (): IResetCounterAction => ({
  type: CounterActions.RESET_COUNTER,
  payload: {}
});
