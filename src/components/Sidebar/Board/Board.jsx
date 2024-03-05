import css from './Board.module.css';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modalSlice';

export const Board = () => {
  const dispatch = useDispatch();

  const handleEditBoard = () => {
    dispatch(openModal({ content: 'edit-board' , }));
  };

  return (
    <>
      <li className={css.boardItem}>
        <div className={css.boardTitleBox}>
          <svg width="18" height="18" className={css.boardIcon}>
            <use href={`${sprite}#icon-bell`} />
          </svg>
          <p className={css.boardText}>Title Text</p>
        </div>
        <div className={css.boardButtonBox}>
          <button onClick={handleEditBoard} className={css.boardButton}>
            <svg className={css.iconButton} width="16" height="16">
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button className={css.boardButton}>
            <svg className={css.iconButton} width="16" height="16">
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </li>
      <li className={css.boardItem}>
        <div className={css.boardTitleBox}>
          <svg width="18" height="18" className={css.boardIcon}>
            <use href={`${sprite}#icon-bell`} />
          </svg>
          <p className={css.boardText}>Title Text</p>
        </div>
        <div className={css.boardButtonBox}>
          <button className={css.boardButton}>
            <svg className={css.iconButton} width="16" height="16">
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button className={css.boardButton}>
            <svg className={css.iconButton} width="16" height="16">
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </li>
      <li className={css.boardItem}>
        <div className={css.boardTitleBox}>
          <svg width="18" height="18" className={css.boardIcon}>
            <use href={`${sprite}#icon-bell`} />
          </svg>
          <p className={css.boardText}>Title Text</p>
        </div>
        <div className={css.boardButtonBox}>
          <button className={css.boardButton}>
            <svg className={css.iconButton} width="16" height="16">
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button className={css.boardButton}>
            <svg className={css.iconButton} width="16" height="16">
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </li>
    </>
  );
};
