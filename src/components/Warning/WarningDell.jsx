
import { useSelector } from 'react-redux';
import css from './Warning.module.css';
import { WarningList } from './WarningList';
import { deleteCard } from '../../redux/card/cardThunk';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../redux/board/boardThunks';
import { deleteColumn } from '../../redux/column/columnThunk';
import { closeModal } from '../../redux/modalSlice';



export const WarningDell = ()=> {
 const dispatch = useDispatch();
  const { selectedElId } = useSelector(state => state.modal);
  console.log(selectedElId)

  const handleDelete = () =>{
    if(selectedElId.deadline){
      dispatch(deleteCard(selectedElId._id))
      dispatch(closeModal())
      return
    }
    if(selectedElId.icon){
      dispatch(deleteBoard(selectedElId._id))
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
