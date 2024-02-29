import { Routes, Route } from 'react-router-dom';
import { AuthPage } from 'pages/AuthPage/AuthPage';
import { useSelector } from 'react-redux';
import { isRegister } from '../redux/auth/selector';
import './App.css';

// import { ModalBody } from './Modals/ModalBody';
// import { useSelector } from 'react-redux';
// import { openModal } from '../redux/modalSlice'; //імпорт методу відкриття модалки

function App() {
  const isRegisterForm = useSelector(isRegister);

  // const {isOpen} = useSelector((state) => state.modal)

  // const dispatch = useDispatch()
  // const openModalHandler = () => {
  //   dispatch(openModal('add-board'))
  // } функція відкриття модалки і передачі контенту
  //<button onClick={openModalHandler}>OPEN MODAL</button> КНОПКА ТРИГЕРУ МОДАЛКИ

  return (
    <>
      {/* {isOpen && <ModalBody/>} */}
      <Routes>
        <Route
          path={`auth/${isRegisterForm ? 'register' : 'login'}`}
          element={<AuthPage />}
        />
      </Routes>
    </>
  );
}

export default App;
