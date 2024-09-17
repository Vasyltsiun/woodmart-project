import { getProductsObject, Product, productsArrey } from 'utils/productsArrey'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    removeProductsFromCart?: (id: number) => void
    changeProductQuantity?: (id: number, quantity: number) => void
}

const productsObject = getProductsObject(productsArrey)
console.log(productsObject)

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArrey),
    CartItem = CartProductListItem,
    removeProductsFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[+productId]}
                    productsCount={productsInCart[+productId]}
                    removeProductsFromCart={removeProductsFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            ))}
        </>
    )
}
export default CartProductList
