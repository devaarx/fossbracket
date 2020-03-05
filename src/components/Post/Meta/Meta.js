import React from 'react';
import moment from 'moment';

const Meta = ({ date }) => (
  <div>
    <p>Published {moment(date).format('D MMM YYYY')}</p>
  </div>
);

export default Meta;
