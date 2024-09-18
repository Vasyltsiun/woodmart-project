import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { addLike, removeLike } from 'store/likeSlice'
import { changeProductQuantity, removeProductFromCart } from 'store/cartSlice'

type Props = {
    product: Product
    productsCount: number
}
const CartProductListItemExtended = ({ product, productsCount }: Props) => {
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )
    const dispatch = useAppDispatch()
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined">
                <CardContent>
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                    <button
                        className="like_button"
                        onClick={() => {
                            isLiked
                                ? dispatch(removeLike(product.id))
                                : dispatch(addLike(product.id))
                        }}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </button>
                    <div>{product.title}</div>
                    <p>Price fore one item: {product.price}</p>
                    <div>Count: {productsCount}</div>
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
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
