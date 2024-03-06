import css from './ScreensPage.module.css';
import { useParams } from 'react-router-dom';
import { selectBoards } from '../../redux/board/selectors';
import { useSelector } from 'react-redux';

import HeaderDashboard from '../dashboard/HeaderDashboard/HeaderDashboard';
import MainDashboard from '../dashboard/MainDashboard/MainDashboard';

const ScreensPage = () => {
  const {boardId} = useParams()
  const boards = useSelector(selectBoards);
  const currentBoard = boards.find((board) => board._id === boardId)
  const bgImg = require(`../../images/card/background-desktop/${currentBoard?.background}.jpg`)
  return (
    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg})`, backgroundPosition: "center", backgroundSize: "cover"}} className={css.screensWrap}>
        <HeaderDashboard board={currentBoard} />
        <MainDashboard board = {currentBoard} />
    </div>
  );
};

export default ScreensPage;

// import css from './ScreensPage.module.css';

// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import HeaderDashboard from '../HeaderDashboard/HeaderDashboard';
// import MainDashboard from '../MainDashboard/MainDashboard';

// import { selectAllDashboards } from '../../redux/dashboard/dashboardsSelectors';

// const ScreensPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [currentPageName, setCurrentPageName] = useState('');
//   const didMount = useRef(true);
//   const { boardName } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const allDashboards = useSelector(selectAllDashboards);
//   const dispatch = useDispatch();
//   const [boards, setBoards] = useState(allDashboards);

//   const lookBoard = () => {
//     const all = allDashboards.filter(dashboard => {
//       return dashboard.title === boardName;
//     });

//     return all;
//   };

//   useEffect(() => {
//     setCurrentPageName(boardName);
//   }, [location.pathname, boardName]);

//   useEffect(() => {
//     setBoards(allDashboards);
//     if (didMount.current !== true && boardName !== currentPageName) {
//       return;
//     }
//     if (allDashboards.length === 0) {
//       navigate(`/home`, {
//         replace: true,
//       });
//     }
//     if (allDashboards.length > 0 && !boardName) {
//       setLoading(true);
//       const lastDashboard = allDashboards[allDashboards.length - 1] ?? '';
//       setCurrentPageName(lastDashboard.title);
//       navigate(`/home/${lastDashboard.title}`, {
//         replace: true,
//         state: { id: lastDashboard._id },
//       });
//       setLoading(false);
//     }
//     didMount.current = false;
//   }, [
//     allDashboards,
//     navigate,
//     boardName,
//     currentPageName,
//     boards.length,
//     dispatch,
//   ]);

//   return (
//     <div
//       className={css.test}
//       $bcgurl={
//         lookBoard().length > 0 ? lookBoard()[0].backgroundURL : undefined
//       }
//     >
//       {loading ? (
//         <div>Loading....</div>
//       ) : (
//         boardName !== undefined && (
//           <div>
//             <HeaderDashboard boardName={boardName} />
//             <MainDashboard />
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default ScreensPage;
