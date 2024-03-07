import css from './Card.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/card/cardThunk';


export const Card = ({card}) =>{
    const dispatch = useDispatch()
    const handleDeleteCard = (e) =>{
        dispatch(deleteCard(card._id))
    }
    //Логіка: Дані передаються в компонент з отриманого з бекенду юзера в тому числі додаткові класи; дзвіночок створюється за умови якщо сьогоднішня дата на 1 більша за дату дедлайну; додати функції при кліку на іконки 
    return (
        <div className={css.cardHeight}>
            <div className={`${css.cardWrapper} ${css.cardPriorityHigh}`}>
                <div className= {css.cardContainer}>
                    <h4 className={css.cardTitle}>{card.title}</h4>
                    <p className={css.cardDiscription}>{card.description}</p>
                    <div className={css.cardFooterWrapper}>
                        <div className={css.cardFooter}>
                            <div className={css.cardPriority}>
                                <h5 className={css.cardFooterTitle}>Priority</h5>
                                <div className={css.cardPriorityInfo}>
                                    <div className={`${css.cardPriorityCircle} ${css.cardPriorityHigh}`}></div>
                                    <p className={css.cardPriorityName}>{card.priority}</p>
                                </div>
                            </div>
                            <div className={css.cardDeadline}>
                                <h5 className={css.cardFooterTitle}>Deadline</h5>
                                <p className={css.cardDeadlineDate}>{card.deadline}</p>
                            </div>
                            <ul className={css.cardIconsList}>
                                <li className={css.cardIconItem}>
                                    <button type='button' className={css.cardIconButton}>
                                    <svg className={css.cardSvg}>
                                        <use href={`${sprite}#icon-bell`}/>
                                    </svg>
                                    </button>
                                </li>
                                <li className={css.cardIconItem} >
                                    <button type='button' className={css.cardIconButton}>
                                    <svg className={css.cardSvg}>
                                        <use href={`${sprite}#icon-arrow-in-circle`}/>
                                    </svg>
                                    </button>
                                </li>
                                <li className={css.cardIconItem}>
                                    <button type='button' className={css.cardIconButton}>
                                    <svg className={css.cardSvg}>
                                        <use href={`${sprite}#icon-pencil`}/>
                                    </svg>
                                    </button>
                                </li>
                                <li className={css.cardIconItem}>
                                    <button onClick={e=>handleDeleteCard(e)} type='button' className={css.cardIconButton}>
                                    <svg className={css.cardSvg}>
                                        <use href={`${sprite}#icon-trash`}/>
                                    </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
    </div>
)}