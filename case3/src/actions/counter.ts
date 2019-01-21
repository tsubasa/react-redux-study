import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

// types
enum actionTypes {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  RESET_COUNTER = 'RESET_COUNTER'
}

// actions
export const incrementCounter = actionCreator(actionTypes.INCREMENT_COUNTER);
export const resetCounter = actionCreator(actionTypes.RESET_COUNTER);
