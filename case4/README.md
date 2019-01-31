# case4

`redux-saga`を利用して非同期処理を実装する

## 解説

redux-sagaはアプリケーションの副作用（データフェッチのような非同期のものやブラウザキャッシュへのアクセスのような不純なもの）を管理・実行・テストしやすくし、処理を向上させることを目的とするライブラリです。

今回から新たに `src/sagas` というディレクトリが追加されました。このディレクトリでは非同期処理などをsagasで管理することでアプリケーションの見通しをよくし、処理向上に繋げています。

redux-sagaがやっていることはとても簡単で、Actionで定義された特定のActionにフックポイントを設け、そのActionがDispatchされたタイミングでredux-sagaの処理が実行される仕組みです。

サンプルコードで解説をすると`src/actions/counter.ts`の`ASYNC_INCREMENT_COUNTER`にフックポイントを与え、`ASYNC_INCREMENT_COUNTER`がDispatchされると`src/sagas/counter.ts`で1秒待機後にカウンタを+1する処理が実行されています。

## 参考資料

- https://redux-saga.js.org/
