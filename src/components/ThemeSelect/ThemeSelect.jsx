import css from './ThemeSelect.module.css';
import sprite from '../../images/sprite.svg';

export const ThemeSelect = () => {
  return (
    <div className={css.menuTheme}>
      <p className={css.titleMenuTheme}>Theme</p>
      <svg className={css.iconChevronDown} width="16" height="16">
        <use href={`${sprite}#icon-chevron-down`} />
      </svg>
    </div>
  );
};
