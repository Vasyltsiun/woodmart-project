import { useAppSelector } from 'store/hooks'
import { Container, Grid, Typography } from '@mui/material'
import WishProductList from 'components/WishProductList/WishProductList'
import WishProductListItemExtended from 'components/WishProductList/WishProductListItemExtended'

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
                    <div className="cart_header">
                        <div>PRODUCTS</div>
                        <div>PRICE</div>
                        <div>QUANTITY</div>
                        <div>SUBTOTAL</div>
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
