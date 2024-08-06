import AppBar from '@mui/material/AppBar'
import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductsList'
import SliderMenu from 'components//SliderMenu/SliderMenu'

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
                    <SliderMenu />
                    <ProductList />
                </Container>
            </AppBar>
        </>
    )
}
export default Main
