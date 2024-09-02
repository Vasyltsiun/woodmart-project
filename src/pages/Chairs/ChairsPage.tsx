import { productsArrey } from 'utils/productsArrey'
import './ChairsPage.css'
import { Grid, Typography } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'

type Props = {
    category: string
}
const ChairsPage = ({ category }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                color={'#333333'}
                fontSize={'38px'}
                fontWeight={'700'}
                sx={{
                    marginBottom: '30px',
                }}
                paddingLeft={'10%'}
            >
                Chairs
            </Typography>
            <Grid container spacing={2}>
                <div className="card_product_chairs">
                    {productsArrey
                        .filter((item) => item.category === category)
                        .map(({ id, title, type, price, image }) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
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
            </Grid>
        </>
    )
}

export default ChairsPage
