import css from './MainDashboard.module.css';
import sprite from '../../../images/sprite.svg';
import { Column } from 'components/Column/Column';


const MainDashboard = () => {
  return (
    <div className={css.columnWrap}>
      <ul>
        <Column/>
      </ul>
      <button className={css.addColumnBtn}>
        <div className={css.addColumnWrap}>
          <svg className={css.addColumnIcon}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
          <p className={css.addColumnTitle}>Add another column</p>
        </div>
      </button>
    </div>
  );
};

export default MainDashboard;
