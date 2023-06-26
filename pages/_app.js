import { BrandNav } from "../components/BrandNav";
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <BrandNav />
            <Component {...pageProps} />
        </>
    )
}

export default App;