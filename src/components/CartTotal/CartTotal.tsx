import { getProductsObject, productsArrey } from 'utils/productsArrey'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const productsObject = getProductsObject(productsArrey)
console.log(productsObject)
const CartTotal = ({ productsInCart }: Props) => {
    return (
        <div>
            Total:{' '}
            {Object.keys(productsInCart).map((productId) => (
                <div className="amount" key={productId}>
                    ${productsInCart[+productId]}
                </div>
            ))}
        </div>
    )
}
export default CartTotal