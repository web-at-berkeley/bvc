import React from 'react';

type Props = {
  title: string;
};

const Tab = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Tab;
