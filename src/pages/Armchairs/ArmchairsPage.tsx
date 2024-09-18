import { Grid, Typography } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'
import { productsArrey } from 'utils/productsArrey'

type Props = {
    category: string
}
const ArmchairsPage = ({ category }: Props) => {
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
                Armchairs
            </Typography>

            <Grid container spacing={2} xs={10}>
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
                                id={id}
                                title={title}
                                type={type}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}
export default ArmchairsPage
