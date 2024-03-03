import css from './HomePage.module.css';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalBody } from 'components/Modals/ModalBody';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { DefaultBoard } from 'components/DefaultBoard/DefaultBoard';
import { Navigation } from 'components/Navigation/Navigation';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen } = useSelector(state => state.modal);
  const location = useLocation();

  const handleOpen = () => {
    setIsMenuOpen(true);
  };

  const handleOverlayClose = event => {
    if (event.target === event.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={css.main} data-theme="dark">
      <Sidebar
        isMenuOpen={isMenuOpen}
        handleCloseOverlay={handleOverlayClose}
      />
      {console.log(location.pathname)}
      <div className={css.mainPage}>
        <Navigation openMenu={handleOpen} />
        {location.pathname === '/home' && <DefaultBoard />}
        {/* В outlet БУДЕ РЕНДЕРИТИСЯ БОРД */}
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
        {isOpen && <ModalBody />}
      </div>
    </div>
  );
};

export default HomePage;
