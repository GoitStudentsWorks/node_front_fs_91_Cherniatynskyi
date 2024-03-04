import css from './MainDashboard.module.css';
import sprite from '../../../images/sprite.svg';
import { Column } from 'components/Column/Column';
import { Card } from 'components/Card/Card';


const MainDashboard = () => {
  const columns = [{id: 1, title: "colum1 A",boardId: '1'},{id: 2, title: "colum1 B",boardId: '1'},{id:3,title: "colum1 C",boardId: '1'}]
  const cards = [{
        id: 1,
        title: "card 1",
        boardId: 1,
        columnId: 1,
    },{
        id: 2,
        title: "card2",
        boardId: 1,
        columnId: 1
    },{
        id: 3,
        title: "card3",
        boardId: 1,
        columnId: 2
    },
    {
        id: 4,
        title: "card4",
        boardId: 1,
        columnId: 2
    },
    {
        id: 5,
        title: "card5",
        boardId: 1,
        columnId: 3
    },
    {
      id: 6,
      title: "card5",
      boardId: 1,
      columnId: 1
    },
    {
      id: 7,
      title: "card5",
      boardId: 1,
      columnId: 1
      },
    {
      id: 8,
      title: "card5",
      boardId: 1,
      columnId: 1
    },
    {
      id: 9,
      title: "card5",
      boardId: 1,
      columnId: 1
    }]

  return (
    <div className={css.boardWrap}>
      <ul className={css.columnsList}>
        {columns.map(col => {
          return (
            <Column key={col.id} column={col}>
              {cards.filter(card => card.columnId === col.id).map(card => {
                        return (<Card key={card.id} card={card}/>)
                    })}
            </Column>
        )})}
        <button className={css.addColumnBtn}>
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
