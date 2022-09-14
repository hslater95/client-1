import styles from '../styles/Navtabs.module.css'
import Link from 'next/link';


function Navtabs() {
    let home_styles = `${styles.home} ${styles.tabs}`;
    let blog_styles = `${styles.blog} ${styles.tabs}`;
    let gallery_styles = `${styles.gallery} ${styles.tabs}`;
    let about_styles = `${styles.about} ${styles.tabs}`;
    return (
        <div className={styles.navtabs}>
            <Link href="/">
                <div className={home_styles}>Home</div>
            </Link>
            <Link href="/blog">
                <div className={blog_styles}>Blog</div>
            </Link>
            <Link href="/gallery">
                <div className={gallery_styles}>Gallery</div>
            </Link>
            <Link href="/about">
                <div className={about_styles}>About</div>
            </Link>
        </div>)
}

export default Navtabs
