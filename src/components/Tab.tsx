import React from 'react';
import './Tabs.css';
type Props = {
  title: string;
};

const Tab = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Tab;
