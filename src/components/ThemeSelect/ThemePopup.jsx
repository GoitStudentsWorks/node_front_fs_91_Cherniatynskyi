import css from './ThemeSelect.module.css';
import { useDispatch } from 'react-redux';
import { updaterUserTheme } from '../../redux/auth/authThunks';

export const ThemePopup = ({ onSelectClose, isOpen }) => {
  const dispatch = useDispatch();

  const handleChangeTheme = e => {
    console.log(e.target.id);
    dispatch(updaterUserTheme({ theme: `${e.target.id}` }));
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
        id="light"
        className={css.menuItem}
      >
        Light
      </li>
      <li
        onClick={handleChangeTheme}
        data-popup="el"
        id="dark"
        className={css.menuItem}
      >
        Dark
      </li>
      <li
        onClick={handleChangeTheme}
        data-popup="el"
        id="violet"
        className={css.menuItem}
      >
        Violet
      </li>
    </ul>
  );
};
