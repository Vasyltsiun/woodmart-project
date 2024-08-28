import AppBar from '@mui/material/AppBar'
import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductsList'

import '../styles/layout.css'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            {' '}
            <AppBar
                position="static"
                sx={{ backgroundColor: 'rgba(16, 16, 16, 0.04)' }}
            >
                <Container className="main-container" component={'main'}>
                    <ProductList />
                </Container>
            </AppBar>
        </>
    )
}
export default Main
