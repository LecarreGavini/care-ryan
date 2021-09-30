import { useState } from 'react'
import Head from 'next/head'
import { Menu } from 'antd'
import {
	HomeOutlined,
	ProfileOutlined,
	NumberOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/router'

const getCurrentMenu = pathname => {
	const urlExt = pathname.replace('/', '')
	if (['', 'menu', 'about'].includes(urlExt)) return urlExt || 'home'
	return ''
}

export const siteTitle = 'Cafe Ryan - Food and Drinks'

const Layout = ({ children }) => {
	const router = useRouter()

	const [currentMenu, setCurrentMenu] = useState(
		getCurrentMenu(router.pathname),
	)

	const handleMenuClick = e => {
		const key = e.key
		setCurrentMenu(key)

		if (key === 'home') router.push('/')
		else router.push(`/${key}`)
	}

	return (
		<div className='flex flex-col h-screen min-h-screen'>
			<Head>
				<title>{siteTitle}</title>
				<link rel='icon' href='/images/favicon.ico' />
				<meta name='description' content={siteTitle} />
				<meta name='og:title' content={siteTitle} />
				<meta property='og:image' content='/images/favicon.ico' />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<header className='h-14 flex justify-between'>
				<div className='ml-5 my-auto'>Logo</div>
				<div className='mr-5 my-auto w-72'>
					<Menu
						onClick={handleMenuClick}
						selectedKeys={[currentMenu]}
						mode='horizontal'
						className='border-0'
					>
						<Menu.Item key='home' icon={<HomeOutlined />}>
							Home
						</Menu.Item>
						<Menu.Item key='menu' icon={<ProfileOutlined />}>
							Menu
						</Menu.Item>
						<Menu.Item key='about' icon={<NumberOutlined />}>
							About
						</Menu.Item>
					</Menu>
				</div>
			</header>
			<div className='flex flex-1 flex-col overflow-y-auto'>
				<main className='flex-1 p-4'>{children}</main>
				<footer className='h-14 flex justify-center'>
					<div className='my-auto'>Cafe Ryan</div>
				</footer>
			</div>
		</div>
	)
}

export default Layout
