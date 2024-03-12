import css from './DefaultBoard.module.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modalSlice';

export const DefaultBoard = () => {
  const dispatch = useDispatch();

  const handleOpenAddBoardModal = () => {
    dispatch(openModal({ content: 'add-board' }));
  };

  return (
    <div className={css.boardDefault}>
      <p className={css.boardDefaultText}>
        Before starting your project, it is essential{' '}
        <span
          className={css.boardDefaultLink}
          onClick={handleOpenAddBoardModal}
        >
          to create a board
        </span>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
};
