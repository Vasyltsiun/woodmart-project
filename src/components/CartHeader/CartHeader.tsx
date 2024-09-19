import { getProductsObject, productsArrey } from 'utils/productsArrey'
import './CartHeader.css'
import { useAppSelector } from 'store/hooks'

type Props = {}

const productsObject = getProductsObject(productsArrey)
console.log(productsObject)

const CartHeader = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div className="card_button">
            <div className="card_basket"></div>
            {Object.keys(productsInCart).map((total, productId) => (
                <div className="amount" key={productId}>
                    ${productsInCart[+productId]}
                </div>
            ))}
            {Object.keys(productsInCart).map((productsInCart) => (
                <div className="quantity">{productsInCart}</div>
            ))}
        </div>
    )
}
export default CartHeader
