import { Container } from '@mui/material'
import '../../styles/layout.css'
import ProductsList from 'components/Products/ProductsList'

type Props = {}
const Home = (props: Props) => {
    return (
        <Container className="main-container" component={'div'}>
            <ProductsList />
        </Container>
    )
}
export default Home
