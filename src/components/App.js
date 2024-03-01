
// import WelcomePage from '../pages/WelcomePage/WelcomePage.jsx';
import { Suspense, lazy } from 'react';
import './App.css';
// import { ModalBody } from './Modals/ModalBody';
// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';


const Welcome = lazy (() => import ('../pages/WelcomePage/WelcomePage'))
const Auth= lazy (()=> import ('../pages/AuthPage/AuthPage'));
const Home =lazy (()=>import ('../pages/HomePage/HomePage'));
const ScreensPages = lazy (()=>import ('../components/ScreensPage/ScreensPage'));
// import { openModal } from '../redux/modalSlice'; //імпорт методу відкриття модалки

function App() {
  // const { isOpen } = useSelector(state => state.modal);

  // const dispatch = useDispatch()
  // const openModalHandler = () => {
  //   dispatch(openModal({content: 'add-board', id: '1234234'}))
  // }// функція відкриття модалки і передачі контенту
  // <button onClick={openModalHandler}>OPEN MODAL</button> КНОПКА ТРИГЕРУ МОДАЛКИ

  return (
    // <div className="App">
    //   <WelcomePage />
    //   {isOpen && <ModalBody />}
    // </div>
    // Робоча версія, підсля написання модулів реєстрації/аутентифікації додам Restricted та Private Routes. Якщо будемо використовувати лоадер також додам до Suspense. Іра
    <Suspense>
    <Routes>
      <Route path='/' element ={<Welcome/>} />
      <Route path='/auth:id' element ={<Auth/>} />
      <Route path='/home' element ={<Home/>} >
        <Route path='/home/:boardId' element={<ScreensPages/>}/>
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
