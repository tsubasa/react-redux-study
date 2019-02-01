import * as React from 'react';
import { mount } from 'enzyme';

import Counter, { IProps } from '../../components/Counter';
import Button from '../../components/Button';

const handleIncrementCounterSpy = jest.fn();
const handleAsyncIncrementCounterSpy = jest.fn();
const handleResetCounterSpy = jest.fn();

const defaultProps: IProps = {
  count: 0,
  asyncIncrementCounter: handleAsyncIncrementCounterSpy,
  incrementCounter: handleIncrementCounterSpy,
  resetCounter: handleResetCounterSpy
};

describe('<Counter />', () => {
  it('<Button />の数を確認', () => {
    const wrapper = mount(<Counter {...defaultProps} />);
    expect(wrapper.find(Button)).toHaveLength(9);
  });

  it('+1ボタンがクリックされたか', () => {
    const wrapper = mount(<Counter {...defaultProps} />);
    wrapper
      .find(Button)
      .at(0)
      .simulate('click');
    expect(handleIncrementCounterSpy).toHaveBeenCalled();
  });

  it('async +1ボタンがクリックされたか', () => {
    const wrapper = mount(<Counter {...defaultProps} />);
    wrapper
      .find(Button)
      .at(1)
      .simulate('click');
    expect(handleAsyncIncrementCounterSpy).toHaveBeenCalled();
  });

  it('resetボタンがクリックされたか', () => {
    const wrapper = mount(<Counter {...defaultProps} />);
    wrapper
      .find(Button)
      .at(2)
      .simulate('click');
    expect(handleResetCounterSpy).toHaveBeenCalled();
  });

  it('カウンタの表示テキストの検証', () => {
    const props = { ...defaultProps, ...{ count: 10 } };
    const wrapper = mount(<Counter {...props} />);
    expect(
      wrapper
        .find('div')
        .at(0)
        .text()
    ).toBe('Counter: 10');
  });
});
