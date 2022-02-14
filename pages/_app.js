import '../styles/globals.css'
import '../styles/hoverFX.css'
import MainLayout from '../components/layout/MainLayout'

function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />    
        </MainLayout>
    )
}

export default MyApp
