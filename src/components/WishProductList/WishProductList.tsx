import { getProductsObject, Product, productsArrey } from 'utils/productsArrey'
import WishProductListItemExtended from './WishProductListItemExtended'

type Props = {
    productsLikeState: {
        [id: number]: boolean
    }
    productsObject?: {
        [id: number]: Product
    }
    WishItem?: any
}

const WishProductList = ({
    productsLikeState,
    productsObject = getProductsObject(productsArrey),
    WishItem = WishProductListItemExtended,
}: Props) => {
    return (
        <>
            {Object.keys(productsLikeState).map((productId) => (
                <WishItem
                    key={productId}
                    product={productsObject[+productId]}
                />
            ))}
        </>
    )
}
export default WishProductList
