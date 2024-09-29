import { Button } from '@mui/material'
import { Product } from 'utils/productsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch } from 'store/hooks'
import { removeLike } from 'store/likeSlice'
import { addProductToCart } from 'store/cartSlice'
import { useState } from 'react'

type Props = {
    product: Product
    price: number
}
const WishProductListItemExtended = ({ product, price }: Props) => {
    const id = product.id
    const [count] = useState<number>(1)
    const dispatch = useAppDispatch()

    return (
        <div className="cart_products_extended">
            <Button
                className="remove_button"
                variant="outlined"
                onClick={() => dispatch(removeLike(product.id))}
            >
                <DeleteIcon />
            </Button>
            <div className="wish_product-img">
                <img src={product.image5} alt="" />
            </div>

            <div className="wish_product_title">{product.title}</div>
            <div className="wish_product-price">$ {product.price}</div>
            <Button
                variant="outlined"
                onClick={() => dispatch(addProductToCart({ id, count }))}
            >
                Add to cart
            </Button>
        </div>
    )
}
export default WishProductListItemExtended
