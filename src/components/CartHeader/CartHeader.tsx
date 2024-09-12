import { getProductsObject, productsArrey } from 'utils/productsArrey'
import './CartHeader.css'

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
            <div className="amount">$</div>
            <div className="quantity"></div>
        </div>
    )
}
export default CartHeader
