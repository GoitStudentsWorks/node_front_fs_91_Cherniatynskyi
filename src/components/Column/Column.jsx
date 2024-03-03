import css from './Column.module.css'

export const Column = ({children, column}) =>{
    return (
    <li className={css.columnWrap}>
        <div>
            <div className={css.columnTitleWrap}>
                <h2 className={css.columnTitle}>{column.title}</h2>
                <div>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
            <ul className={css.columnList}>
                {children}
            </ul>
        </div>
        <button className={css.columnButton}>Add Card</button>
    </li>)
}