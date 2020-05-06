import React from 'react';
import moment from 'moment';

function Header({ timeToRead, frontmatter }) {
  const { category, title, date } = frontmatter;
  return (
    <div className="latest article_header">
      <header className=" article_header_content">
        <span>{category}</span>
        <h1>{title}</h1>
        <div className="article_header_meta">
          <span>
            Posted on: <strong>{moment(date).format('D MMM YYYY')}</strong>
          </span>
          <strong>{timeToRead} min read</strong>
        </div>
      </header>
    </div>
  );
}

export default Header;
