import * as React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';

export default (props: {}) => {
  return (
    <React.Fragment>
      {/* デフォルトで表示 */}
      <HelloWorld />

      {/* メッセージを変更して表示 */}
      <HelloWorld message="Taro" />

      {/* カウンター */}
      <Counter />
    </React.Fragment>
  );
};
