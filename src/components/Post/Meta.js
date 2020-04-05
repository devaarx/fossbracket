import React from 'react';
import moment from 'moment';

const Meta = ({ date }) => (
  <div className="article_meta">
    <p>Published {moment(date).format('D MMM YYYY')}</p>
  </div>
);

export default Meta;
