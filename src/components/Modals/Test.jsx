import css from './ModalBody.module.css'
import { useDispatch } from "react-redux"
import { closeModal } from '../../redux/modalSlice'

export const Test = ()=>{
    const dispatch = useDispatch()

    const closeModalHandler = () =>{
        dispatch(closeModal())
    }

    return (
    <div className={css.testModalBody}>
        <button onClick={closeModalHandler}>Close</button>
    </div>)
}

// ТЕСТОВИЙ КОМПОНЕНТ. ЗАМІСТЬ НЬОГО БУДУТЬ ФОРМИ 