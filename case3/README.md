# case3

ActionCreatorを利用して、ActionとReducerをスマートかつ安全に記述する

## 解説

case2とcase3のコードと比較してみます。

#### case2のaction

```ts
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

export const incrementCounter = (): IIncrementCounterAction => ({
  type: CounterActions.INCREMENT_COUNTER,
  payload: {}
});

export const resetCounter = (): IResetCounterAction => ({
  type: CounterActions.RESET_COUNTER,
  payload: {}
});
```

#### case3のaction

```ts
enum actionTypes {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  RESET_COUNTER = 'RESET_COUNTER'
}

export const incrementCounter = actionCreator(actionTypes.INCREMENT_COUNTER);
export const resetCounter = actionCreator(actionTypes.RESET_COUNTER);
```

どちらも同じ動作をするコードでもActionCreatorを利用することでよりスマートに記述できます。

Reduxはアプリの規模が大きくなるにつれActionやReducerも肥大化していくのでActionCreatorなどを活用することでコードの可読性や保守性を担保します。

## 参考資料

- https://github.com/aikoven/typescript-fsa
- https://github.com/dphilipson/typescript-fsa-reducers
- https://github.com/redux-utilities/flux-standard-action
