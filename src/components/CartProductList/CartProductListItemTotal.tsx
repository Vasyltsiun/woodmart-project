import { getProductsObject, productsArrey } from 'utils/productsArrey'

type Props = {
    productsCount: number
    productId: number
}

const CartProductListItemTotal = ({ productsCount, productId }: Props) => {
    const productsObject = getProductsObject(productsArrey)
    const productData = (productsObject as any)[productId]
    return (
        <div>
            <div>{productData.price * productsCount} $</div>
        </div>
    )
}
export default CartProductListItemTotal
