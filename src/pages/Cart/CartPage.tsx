import { Container, Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import { useAppSelector } from 'store/hooks'

type Props = {}

const CartPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <Container>
                <Typography
                    variant="h4"
                    component={'h1'}
                    sx={{ margin: '40px 0' }}
                >
                    Cart
                </Typography>
                <Grid container spacing={4} sx={{ marginBottom: '30px' }}>
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                </Grid>
                <div className="cart_total">
                    <CartTotal productsInCart={productsInCart} />
                </div>
            </Container>
        </div>
    )
}
export default CartPage
