import React from 'react';
import Meta from './Meta';

const Content = ({ body, title, date }) => (
  <div className="article_content">
    <header className="article_header">
      <Meta date={date} />
      <h1 className="article_header_title">{title}</h1>
    </header>
    <main className="article_content_body" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
