import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from './Main'
import Footer from './Footer'
import SliderMenu from 'components//SliderMenu/SliderMenu'

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <SliderMenu />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
