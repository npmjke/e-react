import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  paginationHandler: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

const defaultProps = {};

const PaginationItem = ({
  isCurrent,
  paginationHandler,
  page,
}) => {
  const onPageClick = () => { paginationHandler(page); };

  return (
    <li className="pagination__item">
      <span
        role="button"
        tabIndex="0"
        onClick={onPageClick}
        onKeyPress={onPageClick}
        className={classNames({ current: isCurrent })}
      >
        {page}
      </span>
    </li>
  );
};

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
