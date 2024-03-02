import { Card } from 'components/Card/Card'
import css from './Column.module.css'

export const Column = ({column}) =>{
    return (
    <li className={css.columnWrap}>
        <div className={css.columnTitleWrap}>
            <h2 className={css.columnTitle}>Title</h2>
            <div>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
        <ul className={css.columnList}>
            <Card/>
        </ul>
        <button className={css.columnButton}>Add Card</button>
    </li>)
}