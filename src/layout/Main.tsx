import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductsList'
import '../styles/layout.css'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Container className="main-container" component={'main'}>
                <ProductList />
            </Container>
        </>
    )
}
export default Main
