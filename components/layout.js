import Head from 'next/head'
import Header from './header'

export const siteTitle = 'Cafe Ryan - Food and Drinks'

const Main = ({ children }) => (
	<main className='flex flex-1 flex-col overflow-y-auto'>
		<div className='flex-1 p-4'>{children}</div>
	</main>
)

const Footer = () => (
	<footer className='h-14 flex justify-center'>
		<div className='my-auto'>Cafe Ryan</div>
	</footer>
)

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
				<link rel='icon' href='/images/favicon.ico' />
				<meta name='description' content={siteTitle} />
				<meta name='og:title' content={siteTitle} />
				<meta property='og:image' content='/images/favicon.ico' />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	)
}

export default Layout
