import { Button } from '@mui/material'
import { getProductsObject, Product, productsArrey } from 'utils/productsArrey'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}
const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArrey),
}: Props) => {
    return (
        <div className="cart_content">
            {' '}
            Cart Totals
            <div className="cart_shipping">
                <div className="shipping">Shipping</div>
                <div className="shipping_content">
                    <div className="free_shipping">Free shipping</div>
                    <div className="shipping_all">Shipping to AL.</div>
                    <div className="change_address">Change address</div>
                </div>
            </div>
            <div className="cart_totals">
                <div className="cart_name">Total</div>
                <div className="cart_sum">
                    {Object.keys(productsInCart).reduce(
                        (total, productId) =>
                            total +
                            productsInCart[+productId] *
                                productsObject[+productId].price,
                        0
                    )}
                    $
                </div>
            </div>
            <Button className="btns_wrapper">Proceed to checkout</Button>
        </div>
    )
}
export default CartTotal
