import css from './Card.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { priorityEnum } from 'utils/priorityObject';
import { openModal } from '../../redux/modalSlice';
import { ChangeColumnMenu } from './ChangeColumn/ChangeColumnMenu';
import { Draggable } from 'react-beautiful-dnd';



export const Card = ({card}) =>{
    const dispatch = useDispatch()
    const priorityColor = priorityEnum.find(pr => pr.title === card.priority)
 
    let dateNow =new Date();
    let deadline = new Date(card.deadline);
    let countdown = deadline-dateNow;
    const warningTime = 86400000*2;

    const handleEditCard = () =>{
        dispatch(openModal({content: "edit-card", id: `${card._id}`}))
    }
  const handleWarningCard =()=>{
    dispatch (openModal({content:'warning-dell', id: card}))
  }
    //Логіка: Дані передаються в компонент з отриманого з бекенду юзера в тому числі додаткові класи; дзвіночок створюється за умови якщо сьогоднішня дата на 1 більша за дату дедлайну; додати функції при кліку на іконки 
    return (
        <Draggable draggableId={card._id} key={card._id} index={card.index}>
            {(provided, snapshot) => (
                <li 
                 className={css.cardHeight}
                 ref={provided.innerRef}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}
                 data-dragging={snapshot.isDragging}
                 >
                <div style={{backgroundColor: `${priorityColor.color}`}} className={css.cardWrapper}>
                    <div className= {css.cardContainer}>
                        <h4 className={css.cardTitle}>{card.title}</h4>
                        <p className={css.cardDiscription}>{card.description}</p>
                        <div className={css.cardFooterWrapper}>
                            <div className={css.cardFooter}>
                                <div className={css.cardPriority}>
                                    <h5 className={css.cardFooterTitle}>Priority {card.index}</h5>
                                    <div className={css.cardPriorityInfo}>
                                        <div style={{backgroundColor: `${priorityColor.color}`}} className={`${css.cardPriorityCircle}`}></div>
                                        <p className={css.cardPriorityName}>{card.priority.split(' ')[0]}</p>
                                    </div>
                                </div>
                                <div className={css.cardDeadline}>
                                    <h5 className={css.cardFooterTitle}>Deadline</h5>
                                    <p className={css.cardDeadlineDate}>{deadline.toLocaleDateString('en-GB')}</p>
                                    <p className={css.cardDeadlineDate}>{}</p>
                                </div>
                                <ul className={css.cardIconsList}>
                                   {countdown<warningTime && (<li className={css.cardIconItemBell}>
                                        <button type='button' className={css.cardIconButton}>
                                        <svg className={css.cardSvg}>
                                            <use href={`${sprite}#icon-bell`}/>
                                        </svg>
                                        </button>
                                    </li>)}
                                    <li className={css.cardIconItem} >
                                        <ChangeColumnMenu card={card}/>
                                    </li>
                                    <li className={css.cardIconItem}>
                                        <button onClick={e=>handleEditCard(e)} type='button' className={css.cardIconButton}>
                                        <svg className={css.cardSvg}>
                                            <use href={`${sprite}#icon-pencil`}/>
                                        </svg>
                                        </button>
                                    </li>
                                    <li className={css.cardIconItem}>
                                        <button onClick={handleWarningCard} type='button' className={css.cardIconButton}>
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
            </li>
            )}

        </Draggable>
)}