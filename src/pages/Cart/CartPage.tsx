import { Container } from '@mui/material'
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
                <div className="card_button">
                    <div className="card_basket"></div>
                    <CartTotal productsInCart={productsInCart} />
                    {Object.keys(productsInCart).map((count) => (
                        <div className="quantity">{count}</div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
export default CartPage
