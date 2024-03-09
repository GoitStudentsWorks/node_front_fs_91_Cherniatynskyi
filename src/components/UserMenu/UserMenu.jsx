import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modalSlice';
import css from './UserMenu.module.css';
import sprite from '../../images/sprite.svg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const handleUserModalOpen = () => {
    dispatch(openModal({ content: 'edit-profile' }));
  };

  return (
    <>
      <div className={css.userInfo}>
        <button
          className={css.buttonOpen}
          type="button"
          onClick={handleUserModalOpen}
        >
          {user.name}

          <div className={css.userAvatarWrap}>
            {user.avatarURL ? (
              <img
                src={user.avatarURL}
                alt=""
                className={css.userImg}
                width={68}
              />
            ) : (
              <div className={css.userIcon}>
                <svg className={css.userIcon}>
                  <use href={`${sprite}#icon-user2`} />
                </svg>
              </div>
            )}
            {/* <svg className={css.userIcon}>
              <use href={`${sprite}#icon-user2`} />
            </svg> */}
          </div>
        </button>
      </div>
    </>
  );
};
