import styled, { css } from 'styled-components';

// types
interface IProps {
  size?: 'sm' | 'md' | 'lg';
}

// styles
const SmButton = css`
  padding: 3px 10px;
  font-size: 0.75rem;
`;

const LgButton = css`
  padding: 5px 16px;
  font-size: 0.95rem;
`;

const Button = styled.button`
  padding: 4px 12px;
  font-size: 0.85rem;
  line-height: 1.5;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  color: #24292e;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-right-width: 0;
  border-radius: 0;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
    border-color: rgba(27, 31, 35, 0.35);
    border-right-width: 1px;
  }

  &:active {
    background-color: #e9ecef;
    background-image: none;
    border-color: rgba(27, 31, 35, 0.35);
    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
  }

  &:first-child {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }

  &:last-child {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    border-right-width: 1px;
  }

  &:hover + & {
    border-left-width: 0;
  }

  ${(props: IProps) => (props.size === 'sm' ? SmButton : props.size === 'lg' ? LgButton : '')}
`;

export default Button;
