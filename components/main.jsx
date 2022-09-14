import styles from '../styles/Main.module.css'
import Header from './header'
import Maincontent from './maincontent';
import Maincontact from './maincontact';
function Main() {
    let main_tailwind = "flex h-screen flex-col  justify-start items-start";
    let main_styles = `${styles.main} ${main_tailwind}`
return (
    <div className={main_styles}>
        <Header />
        <Maincontent />
        <Maincontact /> 
      </div>
)
}

export default Main
