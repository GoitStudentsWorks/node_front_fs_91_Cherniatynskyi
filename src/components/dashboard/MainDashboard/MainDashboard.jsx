import css from './MainDashboard.module.css';
import sprite from '../../../images/sprite.svg';
import { Column } from 'components/Column/Column';
import { Card } from 'components/Card/Card';
import { useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { openModal } from '../../../redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import {getCards} from '../../../redux/card/cardThunk';
import {getColumns} from '../../../redux/column/columnThunk';

const MainDashboard = ({ board }) => {
  const dispatch = useDispatch();
  const stateColumns = useSelector(state => state.columns.columns)
  const stateCards = useSelector(state => state.cards.cards)
  const filterValue = useSelector(state => state.filter.filterValue)
  const [listRef] = useAutoAnimate()

  useEffect(() => {
    if(board){
      dispatch(getColumns(board._id))
      dispatch(getCards(board._id))
    }
  }, [dispatch, board]);


  const handleAddColumn = () => {
    dispatch(openModal({ content: 'add-column' }));
  };

  return (
    <div className={css.boardWrap}>
      <ul className={css.columnsList} ref={listRef}>
        {stateColumns && stateColumns.map(col => {
          return (
            <Column key={col._id} column={col} >
              {stateCards && stateCards
                .filter(card => {
                  if(card.columnId === col._id){
                    if(filterValue){
                      return (card.priority === filterValue)
                    }
                    return true
                  }
                  return false
                  
                })
                .map(card => {
                  return <Card key={card._id} card={card} />;
                })}
            </Column>
          );
        })}
        <button onClick={handleAddColumn} className={css.addColumnBtn}>
          <div className={css.addColumnWrap}>
            <svg className={css.addColumnIcon}>
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
            <p className={css.addColumnTitle}>Add another column</p>
          </div>
        </button>
      </ul>
    </div>
  );
};

export default MainDashboard;
