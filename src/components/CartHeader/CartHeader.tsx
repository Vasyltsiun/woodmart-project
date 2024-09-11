import './CartHeader.css'

type Props = {}
const CartHeader = (props: Props) => {
    return (
        <div className="card_button">
            <div className="card_basket"></div>
            <div className="amount">$0.00</div>
            <div className="quantity">0</div>
        </div>
    )
}
export default CartHeader
