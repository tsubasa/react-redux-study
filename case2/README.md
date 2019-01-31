# case2

Reduxの基本的な機能を理解する

- Reduxを導入する
- Action/Reducer/Storeそれぞれの役割を理解する

## 解説

まずReduxのAction/Reducer/Storeそれぞれの役割について説明します。

- `Action`はアプリケーションからの情報をStoreへ送るためのオブジェクト
- `Reducer`はActionからの指示を受けてStateを変更するためのオブジェクト
- `Store`はアプリケーション全体のStateを集中管理しているオブジェクト(JSON的なものをイメージしてください)

そしてReduxはFacebookが提唱する[Flux](https://facebook.github.io/flux/docs/in-depth-overview.html)のデータフローのデザインパターンにインスパイアされ設計されているので、データフローは一方向になります。

#### Fluxのデータフロー

```
                 +---------- Action <-------+
                 |                          |
                 v                          |
Action ----> Dispatcher ----> Store ----> View
```

#### Reduxのデータフロー

```
                          +------------ Dispatch(Action) <----------+
                          |                                         |
                          v                                         |
Dispatch(Action) ----> Reducers ----> New State ----> Store ----> View
```

上記のデータフローを解りやすくcase2のサンプルコードで解説します。

1. `src/reducers` でStoreで一元管理するStateを定義する
2. `src/actions` でStateを変更するためのActionを定義する
3. `src/containers` でStoreから必要なStateを取り出し、StateとActionをComponentのPropsに定義する
4. `src/components` でStateを使ってComponentを描画したり、トリガーにActionを定義する
5. `src/components` でActionが発火されると `src/reducers` でStateが変更される
6. Stateが変更されると`step3`へ戻り以後繰り返し

このように一方向にデータが流れ続けるようになっています。

## デバッグ

Reduxにはブラウザから利用できる便利なデバッグツールが用意されています。Reduxで開発を行うときに大変重宝しますので導入を推奨します。

- https://github.com/zalmoxisus/redux-devtools-extension

### Redux DevTools Extensionを使ったデバッグ方法

1. Google ChromeでDevToolsを起動
2. DevToolsのタブから`Redux`をクリック
3. Inspectorでアクションの発火ログやStateの変化が確認できる
4. ChartでStoreが持つStateをツリー表示で確認できる

## 参考資料

- https://redux.js.org/
