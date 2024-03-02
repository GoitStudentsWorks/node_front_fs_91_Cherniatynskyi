import css from './Navigation.module.css';
import sprite from '../../images/sprite.svg';
// import { UserMenu } from '../UserMenu/UserMenu.js';
// import { ThemeSelect } from '../ThemeSelect/ThemeSelect.js';

export const Navigation = ({ openMenu }) => {
  return (
    <div className={css.navContainer}>
      <button className={css.buttonBurger} type="button" onClick={openMenu}>
        <svg className={css.iconBurger} width="16" height="16">
          <use href={`${sprite}#icon-menu`} />
        </svg>
      </button>

      <div className={css.navMenu}>
        {/* <ThemeSelect />
        <UserMenu /> */}
      </div>
    </div>
  );
};
