import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArrey } from 'utils/productsArrey'

console.log(productsArrey)

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                color={'black'}
                fontWeight={'700'}
                lineHeight={'42px'}
                fontSize={'32px'}
                variant="h4"
                component={'h2'}
                sx={{
                    marginBottom: '10px',
                }}
            >
                {' '}
                Our categories
            </Typography>
            <Typography
                color={'#777777'}
                fontSize={'16px'}
                component={'h2'}
                sx={{
                    marginBottom: '40px',
                }}
            >
                {' '}
                Lots of new products and product collections
            </Typography>
            <Grid container spacing={2}>
                {productsArrey.map(({ id, title, image }) => (
                    <Grid item xs={12} sm={6} lg={4} key={id}>
                        <ProductListItem title={title} image={image} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductsList
