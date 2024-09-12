import { getProductsObject, productsArrey } from 'utils/productsArrey'
import './CartHeader.css'

type Props = {
    addProductToCart: {
        totalCount: number
        totalPrice: number
    }
}

const productsObject = getProductsObject(productsArrey)
console.log(productsObject)

const CartHeader = ({ addProductToCart }: Props) => {
    return (
        <div className="card_button">
            <div className="card_basket"></div>
            <div className="amount">${ProductsInCart.totalCount}</div>
            <div className="quantity">{ProductsInCart.totalPrice}</div>
        </div>
    )
}
export default CartHeader
