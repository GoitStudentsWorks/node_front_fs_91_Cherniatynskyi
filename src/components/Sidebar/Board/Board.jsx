import css from './Board.module.css';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modalSlice';
import { deleteBoard } from '../../../redux/board/boardThunks';
import { useNavigate } from 'react-router-dom';
import { setCurrentBoardId } from '../../../redux/board/boardSlice';

export const Board = ({ board }) => {
  const dispatch = useDispatch();
  const navigate= useNavigate()

  const handleEditBoard = () => {
    dispatch(openModal({ content: 'edit-board' }));
  };

  const handleNavigate = (e) =>{
    if(e.target !== e.currentTarget){
      return
    }
    navigate(`/home/${board._id}`)
    dispatch(setCurrentBoardId(board._id))
  }

  const handleDelete = () =>{
    navigate('/home')
    dispatch(deleteBoard(board._id))
  }
  return (
    <li id='boardBtn' onClick={handleNavigate} className={css.boardItem}>
      <div className={css.boardTitleBox}>
        <svg width="18" height="18" className={css.boardIcon}>
          <use href={`${sprite}#icon-${board.icon}`} />
        </svg>
        <p className={css.boardText}>{board.name}</p>
      </div>
      <div className={css.boardButtonBox}>
        <button onClick={handleEditBoard} className={css.boardButton}>
          <svg className={css.iconButton} width="16" height="16">
            <use href={`${sprite}#icon-pencil`} />
          </svg>
        </button>
        <button
          className={css.boardButton}
          onClick={handleDelete}
        >
          <svg className={css.iconButton} width="16" height="16">
            <use href={`${sprite}#icon-trash`} />
          </svg>
        </button>
      </div>
    </li>
  );
};
