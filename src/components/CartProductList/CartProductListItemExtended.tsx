import { Button } from '@mui/material'
import { Product } from 'utils/productsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { changeProductQuantity, removeProductFromCart } from 'store/cartSlice'
import './CartProductsListItemExtended.css'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    product: Product
    productsCount: number
}
const CartProductListItemExtended = ({ product, productsCount }: Props) => {
    const dispatch = useAppDispatch()
    const productsInCart = useAppSelector((state) => state.productsInCart)
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
                <img src={product.image5} alt="" />
            </div>

            <div className="product_title">{product.title}</div>

            <Quantity
                count={productsCount}
                onDecrementClick={() => {
                    if (productsCount === 1) {
                        dispatch(removeProductFromCart(product.id))
                    } else {
                        dispatch(
                            changeProductQuantity({
                                id: product.id,
                                quantity: productsCount - 1,
                            })
                        )
                    }
                }}
                onIncrementClick={() =>
                    dispatch(
                        changeProductQuantity({
                            id: product.id,
                            quantity: productsCount + 1,
                        })
                    )
                }
                minCount={0}
            />
            <div className="product_count">
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartProductListItemExtended
