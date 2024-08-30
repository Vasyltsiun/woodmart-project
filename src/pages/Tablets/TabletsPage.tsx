import { Grid } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'
import { productsArrey } from 'utils/productsArrey'

type Props = {
    category: string
}
const TabletsPage = ({ category }: Props) => {
    return (
        <div>
            {productsArrey
                .filter((item) => item.category === category)
                .map(({ id, title, type, price, image }) => (
                    <Grid item xs={12} sm={6} lg={4} key={id}>
                        <ProductListItem
                            title={title}
                            type={type}
                            price={price}
                            image={image}
                        />
                    </Grid>
                ))}
        </div>
    )
}
export default TabletsPage
