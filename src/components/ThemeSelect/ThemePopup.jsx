import css from './ThemeSelect.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updaterUserTheme } from '../../redux/auth/authThunks';

export const ThemePopup = ({ onSelectClose, isOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleChangeTheme = e => {
    dispatch(updaterUserTheme({ theme: `${e.target.id}` }));
    const selectedTheme = e.target.id;
    localStorage.setItem('theme', selectedTheme);
    onSelectClose();
  };

  return (
    <ul
      data-popup="menu"
      className={`${css.menuList} ${!isOpen && css.menuListHidden}`}
    >
      <li
        onClick={handleChangeTheme}
        data-popup="el"
        id="dark"
        className={`${css.menuItem} ${user.theme === 'dark' ? css.activ : ''}`}
      >
        Dark
      </li>
      <li
        onClick={handleChangeTheme}
        data-popup="el"
        id="light"
        className={`${css.menuItem} ${user.theme === 'light' ? css.activ : ''}`}
      >
        Light
      </li>
      <li
        onClick={handleChangeTheme}
        data-popup="el"
        id="violet"
        className={`${css.menuItem} ${
          user.theme === 'violet' ? css.activ : ''
        }`}
      >
        Violet
      </li>
    </ul>
  );
};
