import css from './MainDashboard.module.css';
import sprite from '../../images/sprite.svg';

import AddColumnModal from '../AddColumnModal/AddColumnModal';

const MainDashboard = () => {
  return (
    <div className={css.columnWrap}>
      <button className={css.addColumnBtn}>
        <div className={css.addColumnWrap}>
          <svg className={css.addColumnIcon}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
          <p className={css.addColumnTitle}>Add another column</p>
        </div>
      </button>
      <AddColumnModal />
    </div>
  );
};

export default MainDashboard;
