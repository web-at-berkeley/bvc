import React, { ReactElement, useState } from 'react';
import TabTitle from './TabTitle';

import './Tabs.css';

type Props = {
  children: ReactElement[];
};

const Tabs = ({ children }: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className="container">
      <ul className="bloc-tabs">
        {children.map((item, index) => (
          <TabTitle key={index} title={item.props.title} index={index} setActiveTab={setSelectedTabIndex} />
        ))}
      </ul>
      <div className="content-tabs">{children[selectedTabIndex]}</div>
    </div>
  );
};

export default Tabs;
