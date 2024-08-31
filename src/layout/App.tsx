import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from './Footer'
import { Route, Routes } from 'react-router'
import ChairsPage from 'pages/Chairs/ChairsPage'
import TabletsPage from 'pages/Tablets/TabletsPage'
import SliderMain from 'components/SliderMain/SliderMain'
import Home from 'pages/Home/Home'
import { Toolbar } from '@mui/material'
import BottomMenu from 'components/Menu/BottomMenu'
import '../components/Menu/BottomMenu.css'

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Toolbar
                className="middle_header"
                sx={{ width: '80%', padding: '100px' }}
            >
                <BottomMenu />
            </Toolbar>
            <SliderMain />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="chairs"
                    element={<ChairsPage category="chairs" />}
                />
                <Route
                    path="tablets"
                    element={<TabletsPage category="tablets" />}
                />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
