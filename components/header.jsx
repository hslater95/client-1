import styles from '../styles/Header.module.css'

function Header() {
    let main_tailwind = "flex h-screen flex-col  justify-start items-start";
    let main_styles = `${styles.main} ${main_tailwind}`
return (
    <>
        <p className={styles.header_text}><strong>Hello &#128075; I am Hasan Slater!</strong></p>
        <p className={styles.subheader_text}><i>I Create Software for the Internet.</i></p>
      </>
)
}

export default Header
