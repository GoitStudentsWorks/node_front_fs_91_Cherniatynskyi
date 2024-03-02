
import css from './Card.module.css';
import sprite from '../../images/sprite.svg';


export const Card = () =>{
    //Логіка: Дані передаються в компонент з отриманого з бекенду юзера в тому числі додаткові класи; дзвіночок створюється за умови якщо сьогоднішня дата на 1 більша за дату дедлайну; додати функції при кліку на іконки 
    return (
        <div className={css.cardHeight}>
    <div className={`${css.cardWrapper} ${css.cardPriorityHigh}`}>
        <div className= {css.cardContainer}>
            <h4 className={css.cardTitle}>The watch Spot Design</h4>
            <p className={css.cardDiscription}>Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.</p>
            <div className={css.cardFooterWrapper}>
            <div className={css.cardFooter}>
                <div className={css.cardPriority}>
                <h5 className={css.cardFooterTitle}>Priority</h5>
                <p className={css.cardPriorityInfo}>
                    <div className={`${css.cardPriorityCircle} ${css.cardPriorityHigh}`}></div>
                    <p className={css.cardPriorityName}>low</p>
                </p>
            </div>
            <div className={css.cardDeadline}>
                <h5 className={css.cardFooterTitle}>Deadline</h5>
                <p className={css.cardDeadlineDate}>12/02/2023</p>
            </div>
            <ul className={css.cardIconsList}>
                <li className={css.cardIconItem}>
                    <svg className={css.cardSvg}>
                        <use href={`${sprite}#icon-bell`}/>
                    </svg>
                </li>
                <li className={css.cardIconItem} >
                    <svg className={css.cardSvg}>
                        <use href={`${sprite}#icon-arrow-in-circle`}/>
                    </svg>
                </li>
                 <li className={css.cardIconItem}>
                    <svg className={css.cardSvg}>
                        <use href={`${sprite}#icon-pencil`}/>
                    </svg>
                </li>
                <li className={css.cardIconItem}>
                    <svg className={css.cardSvg}>
                        <use href={`${sprite}#icon-trash`}/>
                    </svg>
                </li>
            </ul>
        </div>
        </div>

        </div>
    </div>
    </div>
)}