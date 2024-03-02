import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { closeModal } from '../../redux/modalSlice';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import css from './ModalBody.module.css';

import { Test } from './Test';

export const ModalBody = () => {
  const dispatch = useDispatch();
  const { modalContent, selectedElId } = useSelector(state => state.modal); // ДІСТАЄ З РЕДАКСУ КОНТЕНТ
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
        return <Test id={selectedElId}></Test>;
      case 'edit-board':
        return; //вставити компонент
      default:
        break;
    }
  };

  return (
    <div onClick={e => backdropClose(e)} className={css.modalBackdrop}>
      <div className={css.modalBody}>{handleContent(modalContent)}</div>
    </div>
  );
};
