import { useState } from 'react';
import { UserModal } from '../UserModal/UserModal.jsx';
import css from './UserMenu.module.css';
import sprite from '../../images/sprite.svg';

export const UserMenu = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const handleModal = () => setIsModalShown(true);
  const handleClouse = () => setIsModalShown(false);

  return (
    <>
      <div className={css.userInfo}>
        <p className={css.userName}>Name</p>
        <button className={css.buttonOpen} type="button" onClick={handleModal}>
          <svg className={css.userIcon}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        </button>
        {isModalShown && <UserModal handleClouse={handleClouse} />}
      </div>
    </>
  );
};
