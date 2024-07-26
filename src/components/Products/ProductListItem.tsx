import { Card, CardContent } from '@mui/material'
import './ProductListItem.css'

type Props = {
    title: string
    image: string
}
const ProductListItem = ({ title, image }: Props) => {
    return (
        <Card variant="outlined" className="product-list-item">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <h3 className="product-title">{title}</h3>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
