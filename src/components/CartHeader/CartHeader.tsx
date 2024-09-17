import { getProductsObject, productsArrey } from 'utils/productsArrey'
import './CartHeader.css'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const productsObject = getProductsObject(productsArrey)
console.log(productsObject)

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div className="card_button">
            <div className="card_basket"></div>
            <CartTotal productsInCart={productsInCart} />
            {Object.keys(productsInCart).map((count) => (
                <div className="quantity">{count}</div>
            ))}
        </div>
    )
}
export default CartHeader
