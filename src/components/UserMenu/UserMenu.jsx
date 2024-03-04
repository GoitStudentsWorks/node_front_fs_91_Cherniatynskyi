import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modalSlice';
import css from './UserMenu.module.css';
import sprite from '../../images/sprite.svg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleUserModalOpen = () => {
    dispatch(openModal({ content: 'edit-profile' }));
  };

  return (
    <>
      <div className={css.userInfo}>
        <p className={css.userName}>Name</p>
        <button
          className={css.buttonOpen}
          type="button"
          onClick={handleUserModalOpen}
        >
          <svg className={css.userIcon}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        </button>
      </div>
    </>
  );
};
