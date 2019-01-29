# case1

Reactの基本的な機能を理解する

- Reactでコンポーネントを作成
- Propsを指定して表示メッセージを変更する (`src/HelloWorld.tsx`)
- Stateを利用して状態を保持する (`src/Counter.tsx`)

## 解説

### `Props`とは

Componentが持つ属性のことで、開発者が任意の属性を定義することができます。サンプルコードの`src/HelloWorld.tsx`では`message`属性を定義してコンポーネントで任意の文字を表示することができます。

### `State`とは

Componentが持つ状態のことで、アクティブや非アクティブ、オープン、クローズと言った状態を保持することができます。`src/Counter.tsx`のサンプルコードでは、現在のカウント値をStateとして保持しています。

## デバッグ

Reactにはブラウザでコンポーネントのデバッグを行える拡張機能が用意されています。開発するときに役立ちますので導入することをオススメします。

- https://github.com/facebook/react-devtools

### React Developer Toolsを使ったデバッグ方法

1. Google ChromeでDevToolsを起動
2. DevToolsのタブから`React`をクリック
3. 表示されたソースコードから検証したいコンポーネントを選択する
4. 右カラムにState情報などが表示されるので確認

## 参考資料

- https://reactjs.org/
