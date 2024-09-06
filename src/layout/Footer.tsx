import { Container } from '@mui/material'
import './Footer.css'

type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer">
            <Container className="foter_container">
                <div className="foter_logo">
                    <div className="white_logo_woodmart"></div>
                    <div className="subscribe_foter">
                        <p>Subscriibe us:</p>
                        <a
                            className="footer_facebook"
                            href="https://www.facebook.com/"
                        >
                            f
                        </a>
                        <a className="footer_x" href="https://x.com/">
                            x
                        </a>
                        <a
                            className="footer_pinterest"
                            href="https://www.pinterest.com/"
                        >
                            p
                        </a>
                        <a
                            className="footer_linkedin"
                            href="https://www.linkedin.com/"
                        >
                            l
                        </a>
                    </div>
                </div>
                <div className="footer_menu">
                    <div className="useful_links">
                        <h2>Useful links</h2>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Showrooms</p>
                        <p>Blog</p>
                        <p>Gift Cards</p>
                    </div>
                    <div className="categories_footer">
                        {' '}
                        <h2>Categories</h2>
                        <p>Chairs</p>
                        <p>Tablets</p>
                        <p>Sofas</p>
                        <p>Armchairs</p>
                        <p>Beds</p>
                    </div>
                    <div className="other_menu">
                        <h1>None</h1>
                        <p>Storage</p>
                        <p>Textiles</p>
                        <p>Lighting</p>
                        <p>Toys</p>
                        <p>Decor</p>
                    </div>
                    <div className="downloan_app">
                        <h2>Download App on Mobile:</h2>
                        <p className="discount_footer">
                            15% discount on your first purchase
                        </p>
                        <div className="discount_elements">
                            <div className="discount_google"></div>
                            <div className="discount_app"></div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="foter_bottom">
                WOODMART © 2024 CREATED BY XTEMOS STUDIO. PREMIUM E-COMMERCE
                SOLUTIONS.
            </div>
        </div>
    )
}
export default Footer
