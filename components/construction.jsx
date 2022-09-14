import styles from '../styles/Construction.module.css'
var emoji = require('node-emoji')
function Construction() {
    
    const truck = emoji.get(':truck:');
    const barrier = emoji.get(':construction:');
    const worker = emoji.get(':construction_worker:');
    const construction_text = "This page is currently under construction ";
    let completed_text = `${construction_text}${truck}${barrier}` 
return (<div className={styles.construction}>{completed_text}</div>)
}

export default Construction
