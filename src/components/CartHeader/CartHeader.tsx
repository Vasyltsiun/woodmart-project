import { getProductsObject, productsArrey } from 'utils/productsArrey'
import './CartHeader.css'
import { useAppSelector } from 'store/hooks'
import CartHeaderTotal from 'components/CartTotal/CartHeaderTotal'
import CartHeaderQty from 'components/CartTotal/CartHeaderQty'

type Props = {}

const productsObject = getProductsObject(productsArrey)
console.log(productsObject)

const CartHeader = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div className="card_button">
            <div className="card_basket"></div>
            <div className="cart_basket_total">
                <CartHeaderTotal productsInCart={productsInCart} />
            </div>
            <div className="quantity">
                <CartHeaderQty productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartHeader
