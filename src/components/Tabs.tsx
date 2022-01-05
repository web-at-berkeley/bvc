import React, { ReactElement, Component, useState } from 'react';
import PropTypes from 'prop-types';
import TabTitle from './TabTitle';

const Styles = {
  tabList: {
    borderBottom: '1px solid',
    paddingLeft: '0',
  },

  tabListItem: {
    display: 'inline-block',
    listStyle: 'none',
    marginBottom: '-1px',
    padding: '0.5rem 0.75rem',
  },

  tabListActive: {
    backgroundColor: 'white',
    border: 'solid #ccc',
    borderWidth: '1px 1px 0 1px',
  },
};

type Props = {
  children: ReactElement[]
}

const Tabs = ({ children } : Props) => {

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  
  return (
    <div className="container"> 
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setActiveTab={setSelectedTabIndex} 
          />
        ))}
      </ul>
      <div className="content">
        {children[selectedTabIndex]} 
      </div>
      
      </div>

  )
  }

export default Tabs;
