import css from '../Card.module.css';
import sprite from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';

export const ChangeColumnPopup = ({isOpen, setPopup, stl ,atr, handleMove, filterVal}) => {
    const stateColumns = useSelector(state => state.columns.columns)
  return (
        <ul data-popup="changeMenu" ref={setPopup} className={`${css.popupMenuList} ${!isOpen && css.popupHidden}`} style={stl.popper} {...atr}>
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
