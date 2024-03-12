import css from './Navigation.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '../../redux/modalSlice';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { ThemeSelect } from '../ThemeSelect/ThemeSelect.jsx';
import { HeaderSpinner } from 'components/Spinner';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const dispatch = useDispatch()
  const {i18n} = useTranslation()
  const isLoading = useSelector(state => state.cards.isLoading)
  const { sideBarIsOpen } = useSelector(state => state.modal);

  const openMenu =()=>{
    dispatch(openSidebar())
    console.log(sideBarIsOpen)
    
  }

  const handleLngChange = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div className={css.navContainer}>
      <button className={css.buttonBurger} type="button" onClick={openMenu}>
        <svg className={css.iconBurger} width="18" height="18">
          <use href={`${sprite}#icon-menu`} />
        </svg>
      </button>
      {isLoading && <div className={css.spinner}><HeaderSpinner ></HeaderSpinner></div>}

      <div className={css.navMenu}>
        <ThemeSelect />
        <UserMenu />
      </div>
      <button onClick={()=>handleLngChange('en')}>En</button>
      <button onClick={()=>handleLngChange('uk')}>Uk</button>
    </div>
  );
};


