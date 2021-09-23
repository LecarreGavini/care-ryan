import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Cafe Ryan - Food and Drinks'

export default function Layout({ children, home }) {
	return (
		<div className=''>
			<Head>
				<link rel='icon' href='/images/favicon.ico' />
				<meta name='description' content={siteTitle} />
				<meta name='og:title' content={siteTitle} />
				<meta property='og:image' content='/images/favicon.ico' />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<header>
				<div className='bg-yellow-400'>test</div>
			</header>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src='/images/coffee.jpeg'
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<a>
								<Image
									priority
									src='/images/coffee.jpeg'
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href='/'>
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	)
}
