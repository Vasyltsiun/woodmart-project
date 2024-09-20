import { getProductsObject, Product, productsArrey } from 'utils/productsArrey'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}
const CartHeaderTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArrey),
}: Props) => {
    return (
        <div className="cart_basket">
            <div>
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
export default CartHeaderTotal
