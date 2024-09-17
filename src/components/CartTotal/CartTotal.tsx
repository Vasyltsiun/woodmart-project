type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartTotal = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div className="amount" key={productId}>
                    ${productsInCart[+productId]}
                </div>
            ))}
        </div>
    )
}
export default CartTotal
