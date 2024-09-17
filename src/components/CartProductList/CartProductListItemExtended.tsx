import { Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArrey'

type Props = {
    product: Product
    productsCount: number
}
const CartProductListItemExtended = ({ product, productsCount }: Props) => {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined">
                <CardContent>
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price fore one item: {product.price}</p>
                    <div>Count: {productsCount}</div>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
