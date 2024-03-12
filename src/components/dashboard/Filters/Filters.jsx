import css from './Filters.module.css';
import sprite from '../../../images/sprite.svg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FiltersForm } from 'components/Forms/FiltersForm/FiltersForm';
import { priorityEnum } from 'utils/priorityObject';
import { useTranslation } from 'react-i18next';

const Filters = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const filterValue = useSelector(state => state.filter.filterValue)
  const filterColor = priorityEnum.find(pr => (pr.title === filterValue))
  const {t} = useTranslation()

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
      e.target.dataset.popup !== 'menu' &&
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
      {filterColor && <div style={{backgroundColor: `${filterColor.color}`}} className={css.filterIndicator}></div>}
      <button data-popup="popupFiltersBtn" className={css.filterButton}>
        <svg data-popup="popupFiltersBtn" className={css.filterIcon}>
          <use data-popup="popupFiltersBtn" href={`${sprite}#icon-filter`} />
        </svg>
        {t("filter")}
      </button>
      <FiltersForm onSelectClose={onFiltersClose} isOpen={isFiltersOpen} />
    </div>
  );
};

export default Filters;
