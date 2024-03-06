import css from './Filters.module.css';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modalSlice';

const Filters = () => {
  const dispatch = useDispatch();

  const handleOpenFilter = () => {
    dispatch(openModal({ content: 'filters' }));
  };

  return (
    <>
      <button onClick={handleOpenFilter} className={css.filterButton}>
        <svg className={css.filterIcon}>
          <use href={`${sprite}#icon-filter`} />
        </svg>
        Filters
      </button>
    </>
  );
};

export default Filters;
