import { getProductsObject, Product, productsArrey } from 'utils/productsArrey'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeaderQty = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).reduce(
                (qty, productId) => qty + productsInCart[+productId],
                0
            )}
        </div>
    )
}
export default CartHeaderQty
