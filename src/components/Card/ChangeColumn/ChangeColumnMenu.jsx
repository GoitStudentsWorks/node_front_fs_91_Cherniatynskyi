import css from '../Card.module.css';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChangeColumnPopup } from './ChangeColumnPopup';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../../redux/card/cardThunk';

export const ChangeColumnMenu = ({card}) => {
  const [isChangeOpen, setIsChangeOpen] = useState(false)

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
    dispatch(updateCard({id: card._id, newCard: {columnId: colId}}))
  }


  return (
    <button data-popup="popupChange" onClick={(e)=>handleOpenPopup(e)} type='button' className={css.cardIconButton}>
            <svg data-popup="popupChange" className={css.cardSvg}>
                <use data-popup="popupChange" href={`${sprite}#icon-arrow-in-circle`}/>
            </svg>
            
   
              <ChangeColumnPopup isOpen={isChangeOpen}  handleMove={handleMoveCard}/>
     
            
    </button>
  )
}
