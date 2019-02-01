import * as React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../../components/Button';

describe('<Button />', () => {
  it('スナップショット', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('表示テキストの検証', () => {
    const wrapper = shallow(<Button>Hello World</Button>);
    expect(wrapper.children().text()).toBe('Hello World');
  });

  it('スタイルの検証', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toHaveStyleRule('background-color', '#eff3f6');
    expect(tree).toHaveStyleRule('background-image', 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)');
  });

  describe('Propsの検証', () => {
    it('sizeにsmが指定されたときのスタイル', () => {
      const tree = renderer.create(<Button size="sm" />).toJSON();
      expect(tree).toHaveStyleRule('padding', '3px 10px');
      expect(tree).toHaveStyleRule('font-size', '0.75rem');
    });

    it('sizeにlgが指定されたときのスタイル', () => {
      const tree = renderer.create(<Button size="lg" />).toJSON();
      expect(tree).toHaveStyleRule('padding', '5px 16px');
      expect(tree).toHaveStyleRule('font-size', '0.95rem');
    });
  });
});
