import css from './BoardForm.module.css'
import { useState } from 'react'
// import { closeModal } from '../../../redux/modalSlice'
import sprite from '../../../images/sprite.svg';


export const NewBoardForm = () =>{

    const [title, setTitle] = useState('')
    const [iconValue, setIconValue] = useState('')
    const [bgValue, setBgValue] = useState('')


    const handleChange =(e)=>{
        setTitle(e.target.value)
    }

    const handleIconChange =(e)=>{
        setIconValue(e.target.value)
    }

    const handleBgChange =(e)=>{
        setBgValue(e.target.value)
    }

    const onSubmitForm =(e)=>{
        e.preventDefault()
        console.log({title, iconValue, bgValue})
    }

    const values = []

    for (let i = 1; i <= 16; i++) {
        values.push(i)  
      }


    return(
        <div className={css.formWrap}>
            <h2 className={css.formTitle}>New Board</h2>
            <form className={css.form} onSubmit={(e)=>onSubmitForm(e)}>
                <label htmlFor="name">
                    <input autoComplete='false' placeholder='Title' onChange={(e)=>handleChange(e)} value={title} className={css.formInput} type="text" name="title" required />
                </label>
                <fieldset className={css.iconsForm}>
                    <legend className={css.iconsTitle}>Icons</legend>
                        <div className={css.iconsWrap}>
                            <label className={css.container}>
                                <input onChange={(e)=>handleIconChange(e)} type="radio" id='icon1' name="icon" value='circles'/>
                                
                                <svg className={css.checkmark}>
                                    <use href={`${sprite}#icon-four-circles`}/>
                                </svg>
                            </label>
                            <label className={css.container}>
                                <input onChange={(e)=>handleIconChange(e)} type="radio" id='icon2' name="icon" value='eye'/>
                                <svg className={css.checkmark}>
                                    <use href={`${sprite}#icon-eye`}/>
                                </svg>
                            </label>

                            <label className={css.container}>
                                <input onChange={(e)=>handleIconChange(e)} type="radio" id='icon3' name="icon" value='star'/>
                                <svg className={css.checkmark}>
                                    <use href={`${sprite}#icon-star`}/>
                                </svg>
                            </label>

                            <label className={css.container}>
                                <input onChange={(e)=>handleIconChange(e)} type="radio" id='icon4' name="icon" value='loading'/>
                                <svg className={css.checkmark}>
                                    <use href={`${sprite}#icon-loading`}/>
                                </svg>
                            </label>

                            <label className={css.container}>
                                <input onChange={(e)=>handleIconChange(e)} type="radio" id='icon5' name="icon" value='puzzle'/>
                                <svg className={css.checkmark}>
                                    <use href={`${sprite}#icon-puzzle`}/>
                                </svg>
                            </label>

                            <label className={css.container}>
                                <input onChange={(e)=>handleIconChange(e)} type="radio" id='icon6' name="icon" value='container'/>
                                <svg className={css.checkmark}>
                                    <use href={`${sprite}#icon-container`}/>
                                </svg>
                            </label>

                            <label className={css.container}>
                                <input onChange={(e)=>handleIconChange(e)} type="radio" id='icon7' name="icon" value='logo'/>
                                <svg className={css.checkmark}>
                                    <use href={`${sprite}#icon-logo`}/>
                                </svg>
                            </label>

                            <label className={css.container}>
                                <input onChange={(e)=>handleIconChange(e)} type="radio" id='icon8' name="icon" value='hexagon'/>
                                <svg className={css.checkmark}>
                                    <use href={`${sprite}#icon-hexagon`}/>
                                </svg>
                            </label>
                        </div>
                </fieldset>
                <fieldset className={css.iconsForm}>
                    <legend className={css.iconsTitle}>Background</legend>
                        <div className={css.bgIconsWrap}>
                           {values.map(bg => {
                            return (
                                <label key={bg} className={css.bgContainer}>
                                    <input onChange={(e)=>handleBgChange(e)} type="radio" id={bg} name="icon" value={bg}/>
                                    <img className={css.bgCheckmark} width="20" height="20" src={require(`../../../images/card/background-icons/${bg}.png`)} alt="" />       
                                </label>)
                           })}  
                        </div>
                </fieldset>
                <button type='submit' className={css.formButton}>
                                <div className={css.iconWrap}>
                                    <svg width='14' height="14" className={css.buttonIcon}>
                                        <use href={`${sprite}#icon-plus`}/>
                                    </svg>
                                </div>
                    Create</button>
            </form>
        </div>
    )
}