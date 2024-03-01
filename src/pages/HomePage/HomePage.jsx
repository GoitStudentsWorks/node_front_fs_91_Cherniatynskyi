import css from './HomePage.module.css'
import {Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import { ModalBody } from 'components/Modals/ModalBody'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Sidebar } from 'components/Sidebar/Sidebar'

const HomePage = () =>{
    const { isOpen } = useSelector(state => state.modal)
    const location = useLocation()

    return(
        <div className={css.main}>
            <Sidebar/> 
            {console.log(location.pathname)}

            <div className={css.mainPage}>
                {/* МІСЦЕ ДЛЯ ХЕДЕРА */}
                {location.pathname === '/home' &&
                     <div className={css.boardDefault}>
                        <p className={css.boardDefaultText}>Before starting your project, it is essential <span className={css.boardDefaultLink}>to create a board</span> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.</p>
                    </div>}
                {/* В outlet БУДЕ РЕНДЕРИТИСЯ БОРД */}
                <Suspense fallback={<div>Loading....</div>}>
                        <Outlet/>
                </Suspense>
                {isOpen && <ModalBody />}
            </div>
        </div>)
}

export default HomePage