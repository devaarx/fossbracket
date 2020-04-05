import React from 'react';
import moment from 'moment';

const Meta = ({ date }) => (
  <div className="article_meta">
    <span>Published on {moment(date).format('D MMM YYYY')}</span>
  </div>
);

export default Meta;
