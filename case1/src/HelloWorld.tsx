import * as React from 'react';

// types
interface IProps {
  message: React.ReactText;
}

// components
const HelloWorld = (props: IProps) => {
  const { message } = props;
  return <h1>Hello, {message}</h1>;
};

// defaultProps
HelloWorld.defaultProps = {
  message: 'World'
};

export default HelloWorld;
