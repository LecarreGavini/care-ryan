import { useState } from 'react'
import { Menu } from 'antd'
import {
	HomeOutlined,
	ProfileOutlined,
	NumberOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/router'
import styles from 'styles/header.module.scss'

const Header = () => {
	const router = useRouter()

	const getCurrentMenu = pathname => {
		const urlExt = pathname.replace('/', '')
		if (['', 'menu', 'about'].includes(urlExt)) return urlExt || 'home'
		return ''
	}

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
		<header className={`${styles.header_section} w-full h-screen`}>
			<div className='flex justify-between'>
				<div className='ml-5 my-auto'>Logo</div>
				<div className='mr-5 my-auto w-72'>
					<Menu
						onClick={handleMenuClick}
						selectedKeys={[currentMenu]}
						mode='horizontal'
						className='border-0 bg-transparent test'
					>
						<Menu.Item
							key='home'
							icon={<HomeOutlined />}
							className='text-white hover:text-white active:text-white'
						>
							Home
						</Menu.Item>
						<Menu.Item
							key='menu'
							icon={<ProfileOutlined />}
							className='text-white'
						>
							Menu
						</Menu.Item>
						<Menu.Item
							key='about'
							icon={<NumberOutlined />}
							// className='text-white'
						>
							About
						</Menu.Item>
					</Menu>
				</div>
			</div>
		</header>
	)
}

export default Header
