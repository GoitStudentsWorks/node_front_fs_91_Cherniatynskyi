import css from '../Card.module.css';
import sprite from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';

export const ChangeColumnPopup = ({isOpen, handleMove, filterVal}) => {
    const stateColumns = useSelector(state => state.columns.columns)
  return (
        <ul style={stateColumns.length < 3 ? {marginTop: "30px"} : {} }  data-popup="changeMenu" className={`${css.popupMenuList} ${!isOpen && css.popupHidden}`}>
            {stateColumns.filter(col => col._id !== filterVal).map(col =>{
                return(
                    <li onClick={()=>handleMove(col._id)}  key={col._id} className={`${css.popupMenuItem}`}>
                        <span className={css.popupMenuText}>{col.title}</span>
                            <svg className={css.selectCardSvg}>
                                <use href={`${sprite}#icon-arrow-in-circle`}/>
                            </svg>
                    </li> 
                )
            })}         
        </ul>
  )
}
