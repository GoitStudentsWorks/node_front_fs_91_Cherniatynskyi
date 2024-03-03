import css from './Sidebar.module.css';
import sprite from '../../images/sprite.svg';
import pot from '../../images/need-help/pot.png';
import pot2x from '../../images/need-help/pot2x.png';
import { Board } from './Board/Board';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modalSlice';


export const Sidebar = ({ isMenuOpen, handleCloseOverlay }) => {
  const dispatch = useDispatch()
  
  const handleAddBoard = ()=>{
    dispatch(openModal({content: 'add-board'}))
  }
  return (
    <div className={isMenuOpen ? css.sideBar : css.sideBarClose}>
      {/* logo, title */}
      <div className={css.titleBox}>
        <div className={css.iconBox}>
          <div className={css.logoIconContainer}>
            <svg className={css.iconLogo} width="16" height="16">
              <use href={`${sprite}#icon-logo`} />
            </svg>
          </div>
          <h2 className={css.title}>Task Pro</h2>
        </div>
        <div className={css.bordBox}>
          <h3 className={css.bordTitle}>My Boards</h3>
          {/* button create */}
          <div className={css.buttonBox}>
            <span className={css.buttonText}>Create a new board</span>
            <button onClick={handleAddBoard} className={css.buttonCreate}>
              <svg className={css.iconCreate} width="22" height="22">
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* boards  */}
      <ul className={css.bordList}>
        <Board></Board>
      </ul>
      {/* need help */}
      <div className={css.helpBox}>
        <div className={css.helpTextBox}>
          <picture className={css.imgHelp}>
            <source srcSet={`${pot} 1x, ${pot2x} 2x`} />
            <img srcSet={`${pot} 1x`} alt="pot" />
          </picture>
          <p className={css.helpText}>
            If you need help with{' '}
            <span className={css.helpTextLink}>TaskPro</span>, check out our
            support resources or reach out to our customer support team.
          </p>
          <button className={css.buttonHelp}>
            <svg className={css.iconHelp} width="20" height="20">
              <use href={`${sprite}#icon-help`} />
            </svg>
            <p className={css.helpButtonText}>Need help?</p>
          </button>
        </div>
        {/* logout */}
        <button className={css.buttonLogOut}>
          <svg className={css.iconLogOut} width="32" height="32">
            <use href={`${sprite}#icon-login`} />
          </svg>
          <p className={css.logOutButtonText}>Log Out</p>
        </button>
      </div>
      <div className={css.overlay} onClick={handleCloseOverlay}></div>
    </div>
  );
};
