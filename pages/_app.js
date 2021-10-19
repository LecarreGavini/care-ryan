import 'antd/dist/antd.less'
import 'tailwindcss/tailwind.css'
import 'styles/_globals.scss'
import 'styles/_antd-overrides.scss'

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
