import styles from '../styles/Aboutcontent.module.css'

function Aboutcontent() {
    let content = "Hello! My name is Hasan and I enjoy creating software that lives on the internet. I began my journey into software engineering as a lab researcher using SQL databases to store, manage, and organize data for my team. Ever since then my passion for software and web development has grown every day, and I am looking forward to the wonderful tools and applications that I will create in the future!"
return (<p className={styles.content}>{content}</p>)
}

export default Aboutcontent
