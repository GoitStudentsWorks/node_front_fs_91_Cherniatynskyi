import css from './ThemeSelect.module.css';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { ThemePopup } from './ThemePopup';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export const ThemeSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {t} = useTranslation()

  useEffect(() =>{
    if((isOpen)){
      document.body.addEventListener('click', handlePopupClose)
    }
    return() => {
      document.body.removeEventListener('click', handlePopupClose)
    }
  })

  const handleOpenPopup = (e) =>{
    if((e.target.popup === 'menu') || (e.target.popup === 'el')){
      return
    }
    setIsOpen(prev => !prev)  
  }

  const handlePopupClose = (e) =>{
    if((e.target.dataset.popup !== 'popupBtn') && (e.target.popup !== 'menu')  && (e.target.popup !== 'el')){
      setIsOpen(prev => !prev)
    }
  }

  const onSelectClose = () =>{
    setIsOpen(prev => !prev)
  }

  return (
    <div data-popup="popupBtn" onClick={(e)=>handleOpenPopup(e)} className={css.menuTheme}>
      <p data-popup="popupBtn" className={css.titleMenuTheme}>{t('nav.theme')}</p>
      <button data-popup="popupBtn" className={css.buttonMenu} type="button">
        <svg data-popup="popupBtn"  className={css.iconChevronDown} width="16" height="16">
          <use data-popup="popupBtn"  href={`${sprite}#icon-chevron-down`} />
        </svg>
      </button>
      <ThemePopup onSelectClose={onSelectClose} isOpen={isOpen}/>
    </div>
  );
};
