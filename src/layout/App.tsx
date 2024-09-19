import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from './Footer'
import { Route, Routes } from 'react-router'
import ChairsPage from 'pages/Chairs/ChairsPage'
import TabletsPage from 'pages/Tablets/TabletsPage'
import Home from 'pages/Home/Home'
import { Toolbar } from '@mui/material'
import BottomMenu from 'components/Menu/BottomMenu'
import '../components/Menu/BottomMenu.css'
import SofasPage from 'pages/Sofas/SofasPage'
import ArmchairsPage from 'pages/Armchairs/ArmchairsPage'

import CartPage from 'pages/Cart/CartPage'

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
                <Route path="sofas" element={<SofasPage category="sofas" />} />
                <Route
                    path="armchairs"
                    element={<ArmchairsPage category="armchairs" />}
                />
                <Route path="cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
