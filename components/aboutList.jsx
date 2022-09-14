import styles from '../styles/Aboutlist.module.css'

function Aboutlist() {
    const es6 = "(ES6)"
    const list1 = 
    <ul>
        <li>Javascript</li>
        <li>Next</li>
        <li>React</li>
        <li>Node</li>
    </ul>
    const list2 = 
    <ul>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>AWS</li>
    </ul>
return (
<div>
    <p className={styles.text}>Here are a few technologies I’ve been working with recently:</p>
    <div className={styles.container}>
    <ul className={styles.list_container}>
        <li className={styles.list_item}>JS</li>
        <li className={styles.list_item}>Next</li>
        <li className={styles.list_item}>React</li>
        <li className={styles.list_item}>Node</li>
    </ul>
    <ul>
        <li className={styles.list_item}>SQL</li>
        <li className={styles.list_item}>MongoDB</li>
        <li className={styles.list_item}>Express</li>
        <li className={styles.list_item}>AWS</li>
    </ul>
    </div>
</div>
)
}

export default Aboutlist
