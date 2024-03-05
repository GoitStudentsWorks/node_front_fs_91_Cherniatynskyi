import css from './ThemeSelect.module.css'

export const ThemePopup = ({onSelectClose, isOpen}) =>{

    const handleChangeTheme = () =>{
        // dispatch на зміну теми юзера
        onSelectClose()
    }

    return (
            <ul  data-popup='menu' className={`${css.menuList} ${!isOpen && css.menuListHidden}`}>
                <li onClick={handleChangeTheme}  data-popup='el' className={css.menuItem}>Light</li>
                <li onClick={handleChangeTheme} data-popup='el' className={css.menuItem}>Dark</li>
                <li onClick={handleChangeTheme} data-popup='el' className={css.menuItem}>Violet</li>
            </ul>
    )
}