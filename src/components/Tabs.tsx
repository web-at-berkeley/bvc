import React, { ReactElement, useState } from 'react';
import TabTitle from './TabTitle';


type Props = {
  children: ReactElement[];
};

const Tabs = ({ children }: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className="container">
      <ul>
        {children.map((item, index) => (
          <TabTitle key={index} title={item.props.title} index={index} setActiveTab={setSelectedTabIndex} />
        ))}
      </ul>
      <div className="content">{children[selectedTabIndex]}</div>
    </div>
  );
};

export default Tabs;
