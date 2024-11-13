import Styles from "./header.module.css";
export default function Header(){
    return(
        <header className={Styles.header}>
            <h1 className={Styles.logo}>ToDo</h1>
            <div className={Styles.navbar}>
                <a href="#Home">Home</a>
                <a href="#AddTask">Add Task</a>
                <a href="#About">About</a>
            </div>
        </header>
    );
}