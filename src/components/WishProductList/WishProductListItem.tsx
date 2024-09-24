import { Product } from 'utils/productsArrey'

type Props = {
    product: Product
}
const WishProductListItem = ({ product }: Props) => {
    return <div className="test">{product.title}</div>
}
export default WishProductListItem
