import css from './DefaultBoard.module.css'

export const DefaultBoard = () =>{
    return(
    <div className={css.boardDefault}>
        <p className={css.boardDefaultText}>Before starting your project, it is essential <span className={css.boardDefaultLink}>to create a board</span> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.</p>
    </div>)
}