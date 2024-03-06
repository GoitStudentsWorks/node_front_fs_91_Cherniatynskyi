import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

import React from 'react';

export const NotFound = () => {
  return (
    <div className={css.notFoundWrapper}>
      <div className={css.notFoundContainer}>
        <h2 className={css.notFoundTitle}>Page not found</h2>
        <Link to="/home" className={css.notFoundBtn}>
          Homepage
        </Link>
      </div>
    </div>
  );
};
