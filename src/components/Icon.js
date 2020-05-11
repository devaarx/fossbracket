import React from 'react';

const Icon = ({ name, icon }) => (
  <svg viewBox={icon.viewBox} className="icon">
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);

export default Icon;
