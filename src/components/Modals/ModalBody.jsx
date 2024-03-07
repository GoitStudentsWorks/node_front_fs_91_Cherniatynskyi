import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { closeModal } from '../../redux/modalSlice';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import css from './ModalBody.module.css';
import {motion} from 'framer-motion'
import { NewBoardForm } from 'components/Forms/BoardForm/NewBoardForm';
import { EditBoardForm } from 'components/Forms/BoardForm/EditBoardForm';
import { AddColumnForm } from 'components/Forms/Column/AddColumnForm';
import { EditColumnForm } from 'components/Forms/Column/EditColumnForm';
import { NeedHelpForm } from 'components/Forms/Help/NeedHelpForm';
import { UserForm } from 'components/Forms/UserForm/UserForm';
import { AddCardForm } from 'components/Forms/CardForm/AddCard';

export const ModalBody = () => {
  const dispatch = useDispatch();
  const { modalContent } = useSelector(state => state.modal); // ДІСТАЄ З РЕДАКСУ КОНТЕНТ
  useLockBodyScroll(); //БЛОКУЄ СКРОЛ СТОРІНКИ

  const firstRender = useRef(false);
  useLockBodyScroll();

  useEffect(() => {
    if (firstRender.current === false) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      firstRender.current = false;
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      dispatch(closeModal()); //ЗАКРИТТЯ НА ЕСКЕЙП
    }
  };

  const backdropClose = e => {
    if (e.target === e.currentTarget) {
      //ЗАКРИТТЯ НА БЕКДРОП
      dispatch(closeModal());
    }
  };

  const handleContent = content => {
    //ФУНКЦІЯ ВИЗНАЧЕННЯ РЕДНЕРУ КОНЕТНТУ. КОЖЕН КЕЙС ПОТРІБНО ПРОПИСАТИ
    switch (content) {
      case 'add-board':
        return <NewBoardForm />;
      case 'edit-board':
        return <EditBoardForm />;
      case 'add-column':
        return <AddColumnForm />;
      case 'edit-column':
        return <EditColumnForm />;
      case 'need-help':
        return <NeedHelpForm />;
      case 'edit-profile':
        return <UserForm />;
      case 'add-card':
        return <AddCardForm />;
      default:
        break;
    }
  };

  return (
    <div onClick={e => backdropClose(e)} className={css.modalBackdrop} >
      <motion.div animate={{y: '0%'}} initial={{y: '100%'}}
       className={css.modalBody}>{handleContent(modalContent)}</motion.div>
    </div>
  );
};
