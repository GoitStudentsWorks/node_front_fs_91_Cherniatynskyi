import css from './Navigation.module.css';
import sprite from '../../images/sprite.svg';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { ThemeSelect } from '../ThemeSelect/ThemeSelect.jsx';

export const Navigation = ({ openMenu }) => {
  return (
    <div className={css.navContainer}>
      <button className={css.buttonBurger} type="button" onClick={openMenu}>
        <svg className={css.iconBurger} width="16" height="16">
          <use href={`${sprite}#icon-menu`} />
        </svg>
      </button>

      <div className={css.navMenu}>
        <ThemeSelect />
        <UserMenu />м
      </div>
    </div>
  );
};
