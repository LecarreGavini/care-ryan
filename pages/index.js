import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import styles from 'styles/index.module.scss'

const Home = () => {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={`${styles.hero_section} w-full h-40`}></section>
		</Layout>
	)
}

export default Home
