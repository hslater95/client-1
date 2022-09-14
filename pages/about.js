import styles from '../styles/About.module.css'
import Construction from '../components/construction'
import Aboutheader from '../components/aboutheader'
import Aboutcontent from '../components/aboutcontent'
import Aboutlist from '../components/aboutlist'
import Maincontact from '../components/maincontact';
import Head from 'next/head'
function About() {
return (
<div className={styles.container}>
     <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Aboutheader />
      <Aboutcontent />
      <Maincontact />
</div>)
}

export default About
