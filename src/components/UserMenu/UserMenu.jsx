import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modalSlice';



export const UserMenu = () => {
  const dispatch = useDispatch()
  const handleUserModalOpen = () =>{
    dispatch(openModal({content: "edit-profile"}))
  }

  return <div onClick={handleUserModalOpen} className={css.test}>Name</div>;
};
