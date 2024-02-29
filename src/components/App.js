import WelcomePage from '../pages/WelcomePage/WelcomePage.jsx';
import './App.css';
import { ModalBody } from './Modals/ModalBody';
import { useSelector } from 'react-redux';
// import { openModal } from '../redux/modalSlice'; //імпорт методу відкриття модалки

function App() {
  const { isOpen } = useSelector(state => state.modal);

  // const dispatch = useDispatch()
  // const openModalHandler = () => {
  //   dispatch(openModal({content: 'add-board', id: '1234234'}))
  // }// функція відкриття модалки і передачі контенту
  // <button onClick={openModalHandler}>OPEN MODAL</button> КНОПКА ТРИГЕРУ МОДАЛКИ

  return (
    <div className="App">
      <WelcomePage />
      {isOpen && <ModalBody />}
    </div>
  );
}

export default App;
