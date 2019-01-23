# case2

Reduxの基本的な機能を理解する

- Reduxを導入する
- Action/Reducer/Storeそれぞれの役割を理解する

## 解説

Action/Reducer/Storeそれぞれの役割について説明です。

- `Action`はアプリケーションからの情報をStoreへ送るためのオブジェクト
- `Reducer`はActionからの指示を受けてStateを変更するためのメソッド
- `Store`はあらゆるStateを一元管理しているオブジェクト

ReduxはFacebookが提唱する[Flux](https://facebook.github.io/flux/docs/in-depth-overview.html)の概念にインスパイアされ設計されているので、データの流れは一方方向になります。

解りやすくcase2のサンプルコードで解説します。

1. `src/reducers` でStoreで一元管理するStateを定義する
2. `src/actions` でStateを変更するためのActionを定義する
3. `src/containers` でStoreから必要なStateやActionを取り出して、ComponentのPropに定義する
4. `src/components` でStateを使ってComponentを描画したりイベントハンドラにActionを定義したりする
5. `src/components` でActionが呼ばれると `src/reducers` でStateが変更される
6. Stateが変更されると`step3`へ戻り以後繰り返し

## デバッグ

Reduxにはブラウザから利用できる便利なデバッグツールが用意されています。Reduxで開発を行うときに大変重宝しますので導入することをオススメします。

- https://github.com/zalmoxisus/redux-devtools-extension

## 参考資料

- https://redux.js.org/
