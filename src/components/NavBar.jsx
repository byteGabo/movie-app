import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
export function NavBar(){
    return <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Link to="/"><h1>Hoog Movie App</h1></Link>
        </div>
    </nav>
}