import React from 'react';

const Icon = ({ name, icon }) => (
  <svg viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);

export default Icon;

// .icon {
//   display: inline-block;
//   width: 1em;
//   height: 1em;
//   stroke-width: 0;
//   stroke: currentColor;
//   fill: currentColor;
//   font-style: normal;
//   font-weight: normal;
//   speak: none;
//   margin-right: .2em;
//   text-align: center;
//   font-variant: normal;
//   text-transform: none;
//   line-height: 1em;
//   margin-left: .2em;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }
