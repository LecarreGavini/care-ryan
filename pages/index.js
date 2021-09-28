import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.scss'
import Link from 'next/link'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p>This is a sample website</p>
				<p>This is a sample website</p>
				<p>This is a sample website</p>
				<p>This is a sample website</p>
				<p>This is a sample website</p>
				<p>This is a sample website</p>
				<p>This is a sample website</p>
				<p>This is a sample website</p>
				<p>This is a sample website</p>
				<p>This is a sample website</p>
			</section>
		</Layout>
	)
}
