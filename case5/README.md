# case5

`styled-components`を利用してコンポーネントを装飾する

## 解説

Buttonを装飾するために`src/components/Button.tsx`を追加しました。この`Button.tsx`では`styled-components`を使いCSSでボタン要素のスタイリングを行っています。

`styled-components`は`styled`をimportすることで任意のHTML要素をベースにCSSで装飾することが可能です。例えば`<h1>`タグを装飾したいときは次のように記述します。

```tsx
import styled from 'styled-components';

const H1 = styled.h1`
  // ここにCSSを記述
`;
```

このように`styled.*`の形式でHTML要素を定義します。またCSSの記述は要素名の後ろにグレイヴアクセント( \` )を追記してその括弧内でスタイルを定義します。

さらに`styled`で生成した要素もPropsを定義することが可能なので、Propsによってスタイルの切り替えなどもできます。

詳しい方法は`Button.tsx`のサンプルコードを確認してください。

## 参考資料

- https://www.styled-components.com/
