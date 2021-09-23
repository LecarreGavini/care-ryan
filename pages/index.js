import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href='posts/first-post'><a>our Next.js tutorial</a></Link>.)
        </p>
      </section>
    </Layout>
  )
}