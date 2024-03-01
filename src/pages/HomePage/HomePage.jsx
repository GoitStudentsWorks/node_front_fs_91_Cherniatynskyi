import css from './HomePage.module.css'
import {Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import { ModalBody } from 'components/Modals/ModalBody'
import { useSelector } from 'react-redux';
import { Sidebar } from 'components/Sidebar/Sidebar'

const HomePage = () =>{
    const { isOpen } = useSelector(state => state.modal)
    return(
        <div className={css.main}>
            <Sidebar/> 
            

            <div className={css.mainPage}>
                {/* МІСЦЕ ДЛЯ ХЕДЕРА */}

                {/* В outlet БУДЕ РЕНДЕРИТИСЯ БОРД */}
                <Suspense fallback={<div>Loading....</div>}>
                        <Outlet/>
                </Suspense>
                {isOpen && <ModalBody />}
            </div>
        </div>)
}

export default HomePage