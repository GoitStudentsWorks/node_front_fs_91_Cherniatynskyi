import css from './Column.module.css';
import sprite from '../../images/sprite.svg';
import { openModal } from '../../redux/modalSlice';
// import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useDispatch } from 'react-redux';
import { setCurrentColumnId } from '../../redux/column/columnSlice';
import { useTranslation } from 'react-i18next';

export const Column = ({ children, column }) => {
  const dispatch = useDispatch();
  const {t} = useTranslation()
  

  // const [listRef] = useAutoAnimate()
  const handleAddCard = () => {
    dispatch(openModal({ content: 'add-card' }));
    dispatch(setCurrentColumnId(column._id))
  };


  const handleEditColumn = () => {
    dispatch(openModal({ content: 'edit-column', id:`${column._id}`}));
  };
  const handleWarningColumn =()=>{
    dispatch (openModal({content:'warning-dell', id: column}))
  }
  return (
    <li className={css.columnWrap}>
      <div>
        <div className={css.columnTitleWrap}>
          <h2 className={css.columnTitle}>{column.title}</h2>
          <div className={css.columnBtnWrap}>
            <button className={css.columnButton}>
              <svg onClick={handleEditColumn} className={css.columnIcon}>
                <use href={`${sprite}#icon-pencil`}></use>
              </svg>
            </button>
            <button onClick={handleWarningColumn} className={css.columnButton}>
              <svg className={css.columnIcon}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg>
            </button>
          </div>
        </div>
        {children}

        <button onClick={handleAddCard} className={css.columnAddButton}>
          <svg className={css.addColumnIcon}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
          <p className={css.addColumnTitle}>{t("main.add-card")}</p>
        </button>
      </div>
    </li>
  );
};
