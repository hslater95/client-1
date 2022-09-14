import styles from '../styles/Navbar.module.css'
import Navlogo from '../components/navlogo'
import Navtabs from '../components/Navtabs';
import Emptyspace from '../components/emptyspace';

function Navbar() {
    console.log('hello navigation bar!');
    return (
    <nav className={styles.navbar}>
        <Navlogo />
        <Emptyspace />
        <Navtabs />
    </nav>
    )
}

export default Navbar
