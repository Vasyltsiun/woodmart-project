import { Button, Card, CardContent } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './ProductListItem.css'
import { useAppSelector } from 'store/hooks'
import { useDispatch } from 'react-redux'
import { addLike, removeLike } from 'store/likeSlice'

type Props = {
    id: number
    title: string
    image: string
    type: string
    price: number
}
const ProductListItem = ({ title, image, type, price, id }: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useDispatch()

    return (
        <Card variant="outlined" className="product-list-item">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <button
                    className="like_button"
                    onClick={() => {
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }}
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </button>
                <h3 className="product-title">{title}</h3>
                <div className="product-features">{type}</div>
                <div className="product-price">$ {price}</div>
                <div className="btns-wrapper">
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
