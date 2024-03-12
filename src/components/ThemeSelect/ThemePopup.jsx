import css from './ThemeSelect.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updaterUserTheme } from '../../redux/auth/authThunks';
import { motion } from 'framer-motion';

export const ThemePopup = ({ onSelectClose, isOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleChangeTheme = e => {
    const selectedTheme = e.target.id;

    localStorage.setItem('theme', selectedTheme);
    dispatch(updaterUserTheme({ theme: selectedTheme }));
    onSelectClose();
  };

  return (
    <motion.ul
    animate={{ scale: 1, y: 0, x: 0 }}
    initial={{scale: 0, y: "-100%", x: "50%"}}
    transition={{ ease: "easeIn", duration: .05 }}
  
      data-popup="menu"
      className={css.menuList}
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
    </motion.ul>
  );
};
