import css from './HomePage.module.css';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalBody } from 'components/Modals/ModalBody';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { DefaultBoard } from 'components/DefaultBoard/DefaultBoard';
import { Navigation } from 'components/Navigation/Navigation';
import {
  deleteCard,
  getCards,
  postCard,
  updateCard,
} from '../../redux/card/cardThunk';
import {
  deleteColumn,
  getColumns,
  postColumn,
  updateColumn,
} from '../../redux/column/columnThunk';

const HomePage = () => {
  const { isOpen } = useSelector(state => state.modal);
  const { theme } = useSelector(state => state.auth.user);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const newColumn = {
      title: 'columnTEst',
      boardId: '65e7b3178d38fd1e9f9d9eb7',
      // columnId: '65e8e7a9874b1f0963c1041a',
      // description: 'text123',
      // priority: 'High',
      // deadline: new Date(),
    };
    // 65e8d29508d34a0107240782
    // const id = '65e8e7cf874b1f0963c10426';
    // dispatch(fetchBoards);
    // dispatch(postColumn(newColumn));
    // dispatch(getColumns(id));
    // dispatch(deleteColumn(id));
    // dispatch(updateCard({ id, newCard }));
  }, [dispatch]);

  return (
    <div className={css.main} data-theme={theme}>
      <Sidebar />
      <div className={css.mainPage}>
        <Navigation />
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
