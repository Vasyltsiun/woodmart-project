import { Button } from '@mui/material'
import { Product } from 'utils/productsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch } from 'store/hooks'
import { removeProductFromCart } from 'store/cartSlice'

type Props = {
    product: Product
    productsCount: number
}
const WishProductListItemExtended = ({ product, productsCount }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <div className="cart_products_extended">
            <Button
                className="remove_button"
                variant="outlined"
                onClick={() => dispatch(removeProductFromCart(product.id))}
            >
                <DeleteIcon />
            </Button>
            <div className="product-img">
                <img src={product.image} alt="" />
            </div>

            <div className="product_title">{product.title}</div>
        </div>
    )
}
export default WishProductListItemExtended
