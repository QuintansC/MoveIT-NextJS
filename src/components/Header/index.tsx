import Link from "next/link";
import styles from '../../styles/components/Header.module.css';


const Header = () => {
    return (
        <header className={styles.header}> 
            <div className={styles.title}></div>
            <div className={styles.links}> 
                <Link href="/">Inicio</Link>
                <Link href="/pomodoro">Pomodoro</Link>
                <Link href="/financas"> Finanças</Link> 
             </div> 
        </header>
    )
}

export default Header;