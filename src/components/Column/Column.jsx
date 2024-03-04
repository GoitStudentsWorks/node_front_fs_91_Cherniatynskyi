import css from './Column.module.css';
import sprite from '../../images/sprite.svg';

export const Column = ({ children, column }) => {
  return (
    <li className={css.columnWrap}>
      <div>
        <div className={css.columnTitleWrap}>
          <h2 className={css.columnTitle}>{column.title}</h2>
          <div className={css.columnBtnWrap}>
            <button className={css.columnButton}>
              <svg className={css.columnIconPensil}>
                <use href={`${sprite}#icon-pencil`}></use>
              </svg>
            </button>
            <button className={css.columnButton}>
              <svg className={css.columnIconTrash}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={css.columnList}>{children}</ul>

        <button className={css.columnAddButton}>
          <svg className={css.addColumnIcon}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
          <p className={css.addColumnTitle}>Add Card</p>
        </button>
      </div>
    </li>
  );
};
