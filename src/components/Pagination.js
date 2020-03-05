import React from 'react';
import { Link } from 'gatsby';
import { PAGINATION } from '../constants';

const Pagination = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => {
  return (
    <div>
      <div>
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'}>
          {PAGINATION.PREV_PAGE}
        </Link>
      </div>
      <div>
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'}>
          {PAGINATION.NEXT_PAGE}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
