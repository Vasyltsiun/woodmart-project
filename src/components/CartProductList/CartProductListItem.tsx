import { Product } from 'utils/productsArrey'

type Props = {
    product: Product
    productsCount: number
}
const CartProductListItem = ({ product, productsCount }: Props) => {
    return (
        <div>
            {product.title}:{productsCount}
        </div>
    )
}
export default CartProductListItem
