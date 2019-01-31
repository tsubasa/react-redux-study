# case1

Reactの基本的な機能を理解する

- Reactでコンポーネントを作成
- Propsを指定して表示メッセージを変更する (`src/HelloWorld.tsx`)
- Stateを利用して状態を保持する (`src/Counter.tsx`)

## 解説

### Propsとは

Componentが持つ属性(Attribute)のことで、開発者が任意の属性を定義することができます。サンプルコードの`src/HelloWorld.tsx`では`message`属性を定義し、任意の文字を表示しています。

### Stateとは

Componentが持つ状態(State)のことで、表示/非表示と言った状態を保持することができます。`src/Counter.tsx`のサンプルコードでは、現在のカウント値をStateとして保持しています。

### Componentの定義

Reactのコンポーネントは代表的なものに`Class Component`と`Function Component`があり、それぞれ使い分けがあります。

`src/Counter.tsx`のようなStateを扱うコンポーネントやライフサイクルメソッドをカスタマイズするような場合は[`Class Component`](https://reactjs.org/docs/state-and-lifecycle.html)で定義します。

```tsx
class Counter extends React.Component<{}, IState> {
  ...
}
```

また`src/HelloWorld.tsx`のようなStatelessなコンポーネントは[`Function Component`](https://reactjs.org/docs/components-and-props.html)で定義します。

```tsx
const HelloWorld: React.FC<IProps> = props => {
  ...
};
```

このようにComponentを正しく使い分けることでコードの可読性が向上するので、どのコンポーネントで定義するか意識しながらコーディングをすると良いです。

## デバッグ

Reactにはブラウザでコンポーネントのデバッグを行える拡張機能が用意されています。開発するときに役立ちますので導入を推奨します。

- https://github.com/facebook/react-devtools

### React Developer Toolsを使ったデバッグ方法

1. Google ChromeでDevToolsを起動
2. DevToolsのタブから`React`をクリック
3. 表示されたソースコードから検証したいコンポーネントを選択する
4. 右カラムにState情報などが表示されるので確認

## 参考資料

- https://reactjs.org/
- https://reactjs.org/tutorial/tutorial.html
