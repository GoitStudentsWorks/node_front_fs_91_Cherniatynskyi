
import { useSelector } from 'react-redux';
import css from './Warning.module.css';
import { WarningList } from './WarningList';
import { deleteCard } from '../../redux/card/cardThunk';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../redux/board/boardThunks';
import { deleteColumn } from '../../redux/column/columnThunk';



export const WarningDell = ()=> {
 const dispatch = useDispatch();
  const { selectedElId } = useSelector(state => state.modal);


const deleteCase = id =>{
  if(selectedElId.hasOwnProperty("deadline")){
    return deleteCard(id)
  }else if (selectedElId.hasOwnProperty("icon")){
    return deleteBoard(id)
  }else {
    return deleteColumn (id)
  }
}
const title = () =>{
  if(selectedElId.hasOwnProperty("deadline")){
    return "Card"
  }else if (selectedElId.hasOwnProperty("icon")){
    return "Board"
  }else {
    return "Column"
  }
}
  const handleDelete = (e) =>{
        dispatch(deleteCase(selectedElId._id))
    }
//Додумати закриття при підтвердженні
  return (
    <div className={css.WDWrapper}>
        <p className={css.WDText}>Are you sure you want to delete <span className={css.WDTitle}>{title()} title {selectedElId.title}</span></p>
        <WarningList  confirm ={e=>handleDelete()}/>
    </div>
  )
}
