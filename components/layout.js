import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Cafe Ryan - Food and Drinks'

export default function Layout({ children, home }) {
	return (
		<div className='flex flex-col h-screen min-h-screen'>
			<Head>
				<link rel='icon' href='/images/favicon.ico' />
				<meta name='description' content={siteTitle} />
				<meta name='og:title' content={siteTitle} />
				<meta property='og:image' content='/images/favicon.ico' />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<header className='h-14'>
				<div>test</div>
			</header>
			<div className='flex flex-1 flex-col overflow-y-auto'>
				<main className='flex-1 bg-gray-100'>{children}</main>
				<footer className='h-14'>
					<div>test</div>
				</footer>
			</div>
		</div>
	)
}
