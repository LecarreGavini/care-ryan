import 'antd/dist/antd.css'
import 'styles/_globals.scss'
import 'styles/antd-overrides.scss'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
