import styles from '../styles/Footer.module.css'

function Footer() {
    const footer_styles = `${styles.footer}`;
    const tailwind_footer_styles = "text-gray-400";
    let amp = `&`;
    let total_footer_styles = `${footer_styles} ${tailwind_footer_styles}`;
return (<div className={total_footer_styles}><i>© Copyright 2022, Designed {amp} Built by Hasan Slater</i></div>)
}

export default Footer
