import React from 'react';

const Content = ({ body, title }) => (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
