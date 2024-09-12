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
            {Object.keys(productsInCart).map((productId) => (
                <div className="amount" key={productId}>
                    ${productsInCart[+productId]}
                </div>
            ))}
            {Object.keys(productsInCart).map((productId) => (
                <div className="quantity">{productId}</div>
            ))}
        </div>
    )
}
export default CartHeader
