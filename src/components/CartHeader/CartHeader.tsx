import { getProductsObject, productsArrey } from 'utils/productsArrey'
import './CartHeader.css'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const productsObject = getProductsObject(productsArrey)
console.log(productsObject)

const CartHeader = ({ cartData }: Props) => {
    return (
        <div className="card_button">
            <div className="card_basket"></div>
            <div className="amount">${cartData.totalCount}</div>
            <div className="quantity">{cartData.totalPrice}</div>
        </div>
    )
}
export default CartHeader
