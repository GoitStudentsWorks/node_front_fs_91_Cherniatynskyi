import { UserForm } from './UserForm.jsx';
import sprite from '../../images/sprite.svg';
import css from './UserModal.module.css';

export const UserModal = ({ handleClouse }) => {
  return (
    <div className={css.conteiner}>
      <div className={css.modalBox}>
        <button
          className={css.buttonClose}
          type="button"
          onClick={handleClouse}
        >
          <svg className={css.iconclose} width="18" height="18">
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        <h2 className={css.modalTitle}>Edit profil</h2>
        <UserForm />
      </div>
    </div>
  );
};
