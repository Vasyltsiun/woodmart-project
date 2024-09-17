import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    product: Product
    productsCount: number
    removeProductsFromCart: (id: number) => void
    changeProductQuantity: (id: number, quantity: number) => void
}
const CartProductListItemExtended = ({
    product,
    productsCount,
    removeProductsFromCart,
    changeProductQuantity,
}: Props) => {
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
                    <Quantity
                        onDecrementClick={() =>
                            changeProductQuantity(product.id, productsCount - 1)
                        }
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productsCount + 1)
                        }
                        count={productsCount}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductsFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
