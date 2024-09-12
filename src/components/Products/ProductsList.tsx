import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArrey } from 'utils/productsArrey'
import SliderMain from 'components/SliderMain/SliderMain'

console.log(productsArrey)

type Props = { addProductToCart: (id: number, count: number) => void }

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <SliderMain />

            <Typography
                variant="h4"
                component={'h2'}
                color={'#333333'}
                fontSize={'38px'}
                fontWeight={'700'}
                sx={{
                    marginBottom: '30px',
                }}
            >
                {' '}
                Weekly bestsellers
            </Typography>
            <Grid container spacing={2}>
                {productsArrey
                    .filter((item) => item.category === 'home')
                    .map(({ id, title, type, price, image, count }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ProductListItem
                                title={title}
                                type={type}
                                price={price}
                                image={image}
                                id={id}
                                count={count}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}
export default ProductsList
