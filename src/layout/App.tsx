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
import { useState } from 'react'
import CartPage from 'pages/Cart/CartPage'

type ProductsInCartType = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Toolbar
                className="middle_header"
                sx={{ width: '80%', padding: '100px' }}
            >
                <BottomMenu productsInCart={productsInCart} />
            </Toolbar>
            <Routes>
                <Route
                    path="/"
                    element={<Home addProductToCart={addProductToCart} />}
                ></Route>
                <Route
                    path="chairs"
                    element={
                        <ChairsPage
                            category="chairs"
                            addProductToCart={addProductToCart}
                        />
                    }
                />
                <Route
                    path="tablets"
                    element={
                        <TabletsPage
                            category="tablets"
                            addProductToCart={addProductToCart}
                        />
                    }
                />
                <Route
                    path="sofas"
                    element={
                        <SofasPage
                            category="sofas"
                            addProductToCart={addProductToCart}
                        />
                    }
                />
                <Route
                    path="armchairs"
                    element={
                        <ArmchairsPage
                            category="armchairs"
                            addProductToCart={addProductToCart}
                        />
                    }
                />
                <Route path="cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
