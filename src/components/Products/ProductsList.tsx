import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArrey } from 'utils/productsArrey'

console.log(productsArrey)

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    marginBottom: '30px',
                }}
            >
                {' '}
                Products list
            </Typography>
            <Grid container spacing={2}>
                {productsArrey.map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ProductListItem
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
