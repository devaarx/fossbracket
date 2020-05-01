import React from 'react';
import { Link } from 'gatsby';
import { PAGINATION } from '../constants';

const Pagination = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => {
  return (
    <>
      {hasPrevPage && (
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} className="button">
          {PAGINATION.PREV_PAGE}
        </Link>
      )}
      {hasNextPage && (
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'} className="button">
          {PAGINATION.NEXT_PAGE}
        </Link>
      )}
    </>
  );
};

export default Pagination;
