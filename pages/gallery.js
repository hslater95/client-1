import styles from '../styles/Gallery.module.css'
import Construction from '../components/construction'
import Head from 'next/head'
function Gallery() {
    return (<div>
        <Head>
        <title>Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Construction />
    </div>)
}

export default Gallery
