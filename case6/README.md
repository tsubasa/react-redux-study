# case6

テストフレームワークを利用してテストを実行する

## 解説

このサンプルではテストフレームワークに`Jest`を利用しています。またユーティリティに`enzyme`や`jest-styled-components`を利用して、テストメソッドの拡張も行っています。

なお今回から増えたファイルやディレクトリは以下の通りです。

| パス | 説明 |
| ---- | ---- |
| `jest.config.js` | Jestの設定ファイル |
| `src/setupTests.ts` | Jestのセットアップファイル |
| `src/__tests__` | テストケースを配置するディレクトリ |

メインとなるテストファイルは`src/__tests__/components/Button.test.tsx`と`src/__tests__/components/Counter.test.tsx`の2ファイルで、それぞれのコンポーネントに関するテストが記述されています。

#### Button.test.tsx

独立したコンポーネントのため、スタイルに関するテストをメインに実施

#### Counter.test.tsx

複数のコンポーネントなどを組み合わせて動作するコンポーネントのため、挙動に関するテストをメインに記述

## 参考資料

- https://jestjs.io/
- https://airbnb.io/enzyme/
- https://github.com/styled-components/jest-styled-components
