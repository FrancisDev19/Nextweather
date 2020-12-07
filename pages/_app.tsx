import '../styles/globals.css'
import '../styles/index.css'
import 'bootswatch/dist/lux/bootstrap.min.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp