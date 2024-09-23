import { useParams } from 'react-router'
import { getProductsObject, Product, productsArrey } from 'utils/productsArrey'
import './ProductPage.css'
import { Button, Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addProductToCart } from 'store/cartSlice'
import { useState } from 'react'
import Reviews from 'components/Reviews/Reviews'

type Props = {}

type ProductsObject = {
    [id: number]: Product
}

const ProductPage = (props: Props) => {
    const productsObject: ProductsObject = getProductsObject(productsArrey)
    const { id } = useParams()
    const dispatch = useDispatch()
    const [count] = useState<number>(1)

    return (
        <Container sx={{ padding: '50px' }}>
            <div className="product_page">
                <div>
                    <div>
                        <img
                            className="product_image"
                            src="../images/blog_pictures/curve_chair_1.jpg"
                            alt=""
                        />
                        <img
                            className="product_image"
                            src="../images/blog_pictures/curve_chair_2.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="product_image"
                            src="../images/blog_pictures/curve_chair_3.jpg"
                            alt=""
                        />
                        <img
                            className="product_image"
                            src="../images/blog_pictures/curve_chair_4.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="product_info">
                    <div className="product_name">
                        {productsObject[parseInt(id!)].title}
                    </div>
                    <div className="product_serial">
                        {productsObject[parseInt(id!)].serial}
                    </div>
                    <div className="product_description">
                        {productsObject[parseInt(id!)].description}
                    </div>
                    <div className="product_price">
                        $ {productsObject[parseInt(id!)].price}.00
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            onClick={() =>
                                dispatch(addProductToCart({ id, count }))
                            }
                        >
                            Add to cart
                        </Button>
                        <Button className="buy_button">Buy now</Button>
                    </div>
                    <div>Shipping and returns</div>
                </div>
            </div>
            <Reviews />
        </Container>
    )
}
export default ProductPage
