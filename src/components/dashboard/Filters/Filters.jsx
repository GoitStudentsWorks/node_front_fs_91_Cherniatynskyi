import css from './Filters.module.css';
import sprite from '../../../images/sprite.svg';
import { useEffect, useState } from 'react';
import { FiltersForm } from 'components/Forms/FiltersForm/FiltersForm';

const Filters = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    if (isFiltersOpen) {
      document.body.addEventListener('click', handleFiltersClose);
    }
    return () => {
      document.body.removeEventListener('click', handleFiltersClose);
    };
  });

  const handleFiltersOpen = e => {
    if (e.target.popup === 'menu' || e.target.popup === 'el') {
      return;
    }
    setIsFiltersOpen(prev => !prev);
  };

  const handleFiltersClose = e => {
    if (
      e.target.dataset.popup !== 'popupFiltersBtn' &&
      e.target.popup !== 'menu' &&
      e.target.popup !== 'el'
    ) {
      setIsFiltersOpen(prev => !prev);
    }
  };

  const onFiltersClose = () => {
    setIsFiltersOpen(prev => !prev);
  };

  return (
    <div
      data-popup="popupFiltersBtn"
      onClick={e => handleFiltersOpen(e)}
      className={css.menuFilterTheme}
    >
      <button data-popup="popupFiltersBtn" className={css.filterButton}>
        <svg data-popup="popupFiltersBtn" className={css.filterIcon}>
          <use data-popup="popupFiltersBtn" href={`${sprite}#icon-filter`} />
        </svg>
        Filters
      </button>
      <FiltersForm onSelectClose={onFiltersClose} isOpen={isFiltersOpen} />
    </div>
  );
};

export default Filters;
