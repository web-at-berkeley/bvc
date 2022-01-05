import React, { Component, useCallback } from 'react';
import PropTypes from 'prop-types';

type Props = {
  title: string
  index: number
  activeTab: number
  setActiveTab: (index: number) => void
}

const TabTitle = ({ title, setActiveTab, activeTab, index}:Props) => {
  const onClick = useCallback(() => {
    setActiveTab(index)
  }, [setActiveTab, index])

  return (
    <li>
      <button
      className={activeTab === index ? "tabs active-tabs" : "tabs"}
      onClick={onClick}>{title}
      </button>
    </li>
  )
}

export default TabTitle;