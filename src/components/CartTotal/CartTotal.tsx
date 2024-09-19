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
        <div className="cart_total">
            <p>Cart Totals</p>

            <div>
                Total:{' '}
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
    )
}
export default CartTotal
