import { productsArrey } from 'utils/productsArrey'
import './ChairsPage.css'
import { Card, Grid } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'

type Props = {
    category: string
}
const ChairsPage = ({ category }: Props) => {
    return (
        <Card variant="outlined" className="product_chairs">
            <div className="card_product_chairs">
                {productsArrey
                    .filter((item) => item.category === category)
                    .map(({ id, title, type, price, image }) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            lg={4}
                            key={id}
                            className="products_size"
                        >
                            <ProductListItem
                                title={title}
                                type={type}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    ))}
            </div>
        </Card>
    )
}
export default ChairsPage
