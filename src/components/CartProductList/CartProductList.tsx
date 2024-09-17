import { getProductsObject, productsArrey } from 'utils/productsArrey'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const productsObject = getProductsObject(productsArrey)
console.log(productsObject)

const CartProductList = ({ productsInCart }: Props) => {
    return (
        <div>
            {' '}
            {Object.keys(productsInCart).map((count) => (
                <div className="quantity">{count}</div>
            ))}
        </div>
    )
}
export default CartProductList
