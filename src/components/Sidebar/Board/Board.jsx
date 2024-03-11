import css from './Board.module.css';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modalSlice';
import { closeSidebar } from '../../../redux/modalSlice';
import { useNavigate } from 'react-router-dom';
import { setCurrentBoardId } from '../../../redux/board/boardSlice';

export const Board = ({ board }) => {
  const dispatch = useDispatch();
  const navigate= useNavigate()

  const handleEditBoard = () => {
    dispatch(openModal({ content: 'edit-board', id: `${board._id}` }));
  };
  const handleNavigate = (e) =>{
    if(e.dataset === 'icon'){
      return
    }
    navigate(`/home/${board._id}`)
    dispatch(setCurrentBoardId(board._id))
    dispatch(closeSidebar())
  }

  const handleWarningBoard =()=>{
    dispatch (openModal({content:'warning-dell', id: board}))
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
        <button data-icon="icon" onClick={handleEditBoard} className={css.boardButton}>
          <svg data-icon="icon" className={css.iconButton} width="16" height="16">
            <use data-icon="icon" href={`${sprite}#icon-pencil`} />
          </svg>
        </button>
        <button
          className={css.boardButton}
          onClick={handleWarningBoard}
          data-icon="icon"
        >
          <svg data-icon="icon" className={css.iconButton} width="16" height="16">
            <use data-icon="icon" href={`${sprite}#icon-trash`} />
          </svg>
        </button>
      </div>
    </li>
  );
};
