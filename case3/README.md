# case3

ActionCreator (`typescript-fsa`, `typescript-fsa-reducers`) を利用して、ActionとReducerをスマートかつ安全に記述する

## 解説

まずはcase2のコードと比較してみてください。ActionCreatorを利用することでコードをスマートに記述できることに気づけるかと思います。Reduxはアプリの規模が大きくなるにつれActionやReducerも肥大化していくのでActionCreatorなどを利用することでコードの可読性や保守性を担保することに繋がります。

## 参考資料

- https://github.com/aikoven/typescript-fsa
- https://github.com/dphilipson/typescript-fsa-reducers
- https://github.com/redux-utilities/flux-standard-action
