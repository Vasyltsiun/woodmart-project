import { useAppSelector } from 'store/hooks'
import { Container, Grid, Typography } from '@mui/material'
import WishProductList from 'components/WishProductList/WishProductList'
import WishProductListItemExtended from 'components/WishProductList/WishProductListItemExtended'
import './WishPage.css'

type Props = {}
const WishlistPage = (props: Props) => {
    const productsLikeState = useAppSelector((state) => state.productsLikeState)
    return (
        <div className="wish_page">
            <Container>
                <Typography
                    variant="h4"
                    component={'h1'}
                    sx={{ margin: '40px 0' }}
                >
                    <div className="wish_cart_header">
                        <div>PRODUCTS</div>
                        <div>TITLE</div>
                        <div>PRICE</div>
                        <div>ADD</div>
                    </div>
                </Typography>
                <Grid container spacing={4} sx={{ marginBottom: '30px' }}>
                    <WishProductList
                        productsLikeState={productsLikeState}
                        WishItem={WishProductListItemExtended}
                    />
                </Grid>
            </Container>
        </div>
    )
}
export default WishlistPage
