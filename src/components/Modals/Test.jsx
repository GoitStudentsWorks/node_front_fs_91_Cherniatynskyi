import css from './ModalBody.module.css'
import { useDispatch } from "react-redux"
import { closeModal } from '../../redux/modalSlice'

export const Test = ({id})=>{
    const dispatch = useDispatch()
    const columns = [{id: 1, title: "colum1 A",boardId: '1'},{id: 2, title: "colum1 B",boardId: '1'},{id:3,title: "colum1 C",boardId: '1'}]
// users, boards, columns, cards
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
    }]

    const closeModalHandler = () =>{
        dispatch(closeModal())
    }

    return (
    <div className={css.testModalBody}>
        <button onClick={closeModalHandler}>close</button>
        <p>{id}</p>


        <ul>
            {columns.map(col => {
                return (
                <li key={col.id}>
                    {col.title}
                    <ul>
                        {cards.filter(card => card.columnId === col.id).map(card => {
                            return (<li key={card.id}>{card.title}</li>)
                        })}
                    </ul>
                </li>
                )
            })}
        </ul>
    </div>)
}

// ТЕСТОВИЙ КОМПОНЕНТ. ЗАМІСТЬ НЬОГО БУДУТЬ ФОРМИ 