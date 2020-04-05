import React from 'react';

const Content = ({ body, title }) => (
  <div className="article_content">
    <h1 className="article_content_title">{title}</h1>
    <div className="article_content_body" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
