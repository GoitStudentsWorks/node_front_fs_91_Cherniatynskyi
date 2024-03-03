import React from 'react';
// import { useState } from 'react';
import css from './ThemeSelect.module.css';
import sprite from '../../images/sprite.svg';

export const ThemeSelect = () => {
  // const [isOpen, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  return (
    <div className={css.menuTheme}>
      <p className={css.titleMenuTheme}>Theme</p>
      <button className={css.buttonMenu} type="button">
        {/* <button className={css.buttonMenu} type="button" onClick={handleOpen}> */}
        <svg className={css.iconChevronDown} width="16" height="16">
          <use href={`${sprite}#icon-chevron-down`} />
        </svg>
      </button>
      <nav className={css.dropdownMenu}>
        <ul className={css.menuList}>
          <li className={css.menuItem}>Light</li>
          <li className={css.menuItem}>Dark</li>
          <li className={css.menuItem}>Violet</li>
        </ul>
      </nav>
    </div>
  );
};
