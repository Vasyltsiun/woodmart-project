import { Container } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Container>
                <div>Cart</div>
                <div className="cart_total">
                    <CartTotal productsInCart={productsInCart} />
                    <CartProductList productsInCart={productsInCart} />
                </div>
            </Container>
        </div>
    )
}
export default CartPage
