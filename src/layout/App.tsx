import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from './Footer'
import { Route, Routes } from 'react-router'
import Chairs from 'pages/Chairs/ChairsPage'
import Home from 'pages/Home/HomePage'
import TabletsPage from 'pages/Tablets/TabletsPage'

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chairs" element={<Chairs />} />
                <Route path="/tablets" element={<TabletsPage />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
