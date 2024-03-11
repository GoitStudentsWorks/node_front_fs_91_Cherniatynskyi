
import { useSelector } from 'react-redux';
import css from './Warning.module.css';
import { WarningList } from './WarningList';
import { deleteCard } from '../../redux/card/cardThunk';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../redux/board/boardThunks';
import { deleteColumn } from '../../redux/column/columnThunk';
import { updateColumnId } from '../../redux/card/cardThunk';
import { closeModal } from '../../redux/modalSlice';
import { useNavigate } from 'react-router-dom';



export const WarningDell = ()=> {
 const dispatch = useDispatch();
 const navigate = useNavigate()
  const { selectedElId } = useSelector(state => state.modal);
  const allCards = useSelector(state=> state.cards.cards)

  const handleDelete = () =>{
    if(selectedElId.deadline){
      dispatch(deleteCard(selectedElId._id))
      const currCards = allCards.filter(c => c.columnId === selectedElId.columnId)
      currCards.forEach(c => {
      if((c.index < selectedElId.index) || (c._id === selectedElId._id)){
        return
      }
      dispatch(updateColumnId({id: c._id, columnId: c.columnId, index: c.index - 1}))
    });

      dispatch(closeModal())
      return
    }
    if(selectedElId.icon){
      dispatch(deleteBoard(selectedElId._id))
      navigate('/home')
      dispatch(closeModal())
      return
    }
    dispatch(deleteColumn(selectedElId._id))
    dispatch(closeModal())
  }

  const handleCancel = () =>{
    dispatch(closeModal())
  }

  return (
    <div className={css.WDWrapper}>
        <p className={css.WDText}>Are you sure you want to delete <span className={css.WDTitle}>{selectedElId.title ?? selectedElId.name}</span></p>
        <WarningList onDelete={handleDelete} onCancel={handleCancel}/>
    </div>
  )
}
