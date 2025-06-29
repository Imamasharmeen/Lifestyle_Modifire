// components/SectionContainer.js
import React from 'react';

const SectionContainer = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

export default SectionContainer;