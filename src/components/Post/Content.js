import React from 'react';

const Content = ({ body }) => (
  <main className="article_content" dangerouslySetInnerHTML={{ __html: body }} />
);

export default Content;
