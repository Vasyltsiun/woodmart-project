import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from './Main'
import Footer from './Footer'
import SliderMain from 'components/SliderMain/SliderMain'

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <SliderMain />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
