import React, { Component} from 'react';
import PropTypes from 'prop-types';

type Props = {
  title: string
}

const Tab = ({children} : Props) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Tab;