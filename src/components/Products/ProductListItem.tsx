import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.css'

type Props = {
    title: string
    image: string
    type: string
    price: number
}
const ProductListItem = ({ title, image, type, price }: Props) => {
    return (
        <Card variant="outlined" className="product-list-item">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                    <div className="wishlist_products"></div>
                </div>
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
