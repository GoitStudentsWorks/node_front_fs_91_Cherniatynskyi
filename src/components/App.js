import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Restricted } from './Routes/Restricted';
import { Private } from './Routes/Private';


// import { ModalBody } from './Modals/ModalBody';
// import { useSelector } from 'react-redux';
// import { openModal } from '../redux/modalSlice'; //імпорт методу відкриття модалки


const WelcomePage = lazy (() => import ('../pages/WelcomePage/WelcomePage'))
const ScreensPages = lazy (()=>import ('../components/ScreensPage/ScreensPage'));
const HomePage = lazy (() => import ('../pages/HomePage/HomePage'))
const AuthPage = lazy (()=>import ('../pages/AuthPage/AuthPage'));

function App() {
  // const openModalHandler = () => {
  //   dispatch(openModal({content: 'add-board', id: '1234234'}))
  // }// функція відкриття модалки і передачі контенту
  // <button onClick={openModalHandler}>OPEN MODAL</button> КНОПКА ТРИГЕРУ МОДАЛКИ

  return (
    // Робоча версія, підсля написання модулів реєстрації/аутентифікації додам Restricted та Private Routes. Якщо будемо використовувати лоадер також додам до Suspense. Іра
    <Suspense>
      <Routes>
        <Route path='/' element ={<WelcomePage/>} />
        <Route path='/auth/:id' element ={<Restricted element={AuthPage}/>} />
        <Route path='/home' element ={<Private element={HomePage}/>} >
          <Route path=':boardId' element={<ScreensPages/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
