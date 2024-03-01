import css from './HomePage.module.css'
import {Suspense} from 'react'
import { Outlet } from 'react-router-dom'

import { Sidebar } from 'components/Sidebar/Sidebar'

const HomePage = () =>{
    return(
        <div className={css.test}>
            {/* МІСЦЕ ДЛЯ ХЕДЕРА */}

            <div>
                <Sidebar/> 

                {/* В outlet БУДЕ РЕНДЕРИТИСЯ БОРД */}
                <Suspense fallback={<div>Loading....</div>}>
                        <Outlet/>
                </Suspense>
            </div>
        </div>)
}

export default HomePage