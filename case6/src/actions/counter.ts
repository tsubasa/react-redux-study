import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

// types
export enum actionTypes {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  RESET_COUNTER = 'RESET_COUNTER',
  ASYNC_INCREMENT_COUNTER = 'ASYNC_INCREMENT_COUNTER'
}

// actions
export const incrementCounter = actionCreator(actionTypes.INCREMENT_COUNTER);
export const resetCounter = actionCreator(actionTypes.RESET_COUNTER);
export const asyncIncrementCounter = actionCreator(actionTypes.ASYNC_INCREMENT_COUNTER);
