import css from './Navigation.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '../../redux/modalSlice';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { ThemeSelect } from '../ThemeSelect/ThemeSelect.jsx';

export const Navigation = () => {
  const dispatch = useDispatch()
  const { sideBarIsOpen } = useSelector(state => state.modal);

  const openMenu =()=>{
    dispatch(openSidebar())
    console.log(sideBarIsOpen)
    
  }
  return (
    <div className={css.navContainer}>
      <button className={css.buttonBurger} type="button" onClick={openMenu}>
        <svg className={css.iconBurger} width="18" height="18">
          <use href={`${sprite}#icon-menu`} />
        </svg>
      </button>

      <div className={css.navMenu}>
        <ThemeSelect />
        <UserMenu />
      </div>
    </div>
  );
};


