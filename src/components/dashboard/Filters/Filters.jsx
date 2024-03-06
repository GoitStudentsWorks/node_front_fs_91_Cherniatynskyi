import css from './Filters.module.css';
import sprite from '../../../images/sprite.svg';
import { useEffect, useState } from 'react';
import { FiltersForm } from 'components/Forms/FiltersForm/FiltersForm';

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener('click', handlePopupClose);
    }
    return () => {
      document.body.removeEventListener('click', handlePopupClose);
    };
  });

  const handleOpenPopup = e => {
    if (e.target.popup === 'menu' || e.target.popup === 'el') {
      return;
    }
    setIsOpen(prev => !prev);
  };

  const handlePopupClose = e => {
    if (
      e.target.dataset.popup !== 'popupBtn' &&
      e.target.popup !== 'menu' &&
      e.target.popup !== 'el'
    ) {
      setIsOpen(prev => !prev);
    }
  };

  const onSelectClose = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div
      data-popup="popupBtn"
      onClick={e => handleOpenPopup(e)}
      className={css.menuFilterTheme}
    >
      <button data-popup="popupBtn" className={css.filterButton}>
        <svg data-popup="popupBtn" className={css.filterIcon}>
          <use data-popup="popupBtn" href={`${sprite}#icon-filter`} />
        </svg>
        Filters
      </button>
      <FiltersForm onSelectClose={onSelectClose} isOpen={isOpen} />
    </div>
  );
};

export default Filters;
