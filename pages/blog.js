import styles from '../styles/Blog.module.css'
import Construction from '../components/construction'
import Head from 'next/head'
function Blog() {
    return (<div>
         <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Construction />
    </div>)
}

export default Blog
