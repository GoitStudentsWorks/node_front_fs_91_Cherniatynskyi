import css from '../Card.module.css';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChangeColumnPopup } from './ChangeColumnPopup';
import { useDispatch } from 'react-redux';
import { updateColumnId } from '../../../redux/card/cardThunk';
import { useSelector } from 'react-redux';

export const ChangeColumnMenu = ({card}) => {
  const [isChangeOpen, setIsChangeOpen] = useState(false)
  const allCards = useSelector(state=> state.cards.cards)

  const dispatch = useDispatch()


  useEffect(() =>{
    if((isChangeOpen)){
      document.body.addEventListener('click', handlePopupClose)
    }
    return() => {
      document.body.removeEventListener('click', handlePopupClose)
    }
  })

  const handleOpenPopup = (e) =>{
    setIsChangeOpen(prev => !prev)  
  }

  const handlePopupClose = (e) =>{
    if((e.target.dataset.popup === "popupChange")){
      return
    }
      setIsChangeOpen(prev => !prev)
  }

  const handleMoveCard = (colId) =>{
    const currColumnCardsLgth = allCards.filter(card => card.columnId === colId).length
    dispatch(updateColumnId({id: card._id, columnId: colId, index: currColumnCardsLgth}))
    const test = allCards.filter(c => c.columnId === card.columnId)
    test.forEach(c => {
      if((c.index === 0) || (c._id === card._id)){
        return
      }
      dispatch(updateColumnId({id: c._id, columnId: c.columnId, index: c.index - 1}))
    });
  }


  return (
    <button data-popup="popupChange" onClick={(e)=>handleOpenPopup(e)} type='button' className={css.cardIconButton}>
            <svg data-popup="popupChange" className={css.cardSvg}>
                <use data-popup="popupChange" href={`${sprite}#icon-arrow-in-circle`}/>
            </svg>
              <ChangeColumnPopup filterVal={card.columnId} isOpen={isChangeOpen}  handleMove={handleMoveCard}/>       
    </button>
  )
}
