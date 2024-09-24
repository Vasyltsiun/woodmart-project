import { Container, Toolbar } from '@mui/material'
import './BottomMenu.css'
import MenuItem from './MenuItem'
import CartHeader from 'components/CartHeader/CartHeader'
import WishlistPage from 'pages/Wishlist/WishlistPage'
import Wishlist from './Wishlist'

type Props = {}
const BottomMenu = (props: Props) => {
    return (
        <Container className="main_container" sx={{ padding: '0px' }}>
            <Toolbar className="all_bottom_menu">
                <MenuItem to="/">
                    <li className="home">Home</li>
                </MenuItem>
                <ul className="bottom_menu">
                    <MenuItem to="/chairs">
                        <li className="chairs">Chairs</li>
                    </MenuItem>
                    <MenuItem to="/tablets">
                        <li className="tablets">Tablets</li>
                    </MenuItem>
                    <MenuItem to="/sofas">
                        <li className="sofas">Sofas</li>
                    </MenuItem>
                    <MenuItem to="/armchairs">
                        <li className="armchairs">Armchairs</li>
                    </MenuItem>
                    <MenuItem to="beds">
                        <li className="beds">Beds</li>
                    </MenuItem>
                    <MenuItem to="/storage">
                        <li className="storage">Storage</li>
                    </MenuItem>
                    <MenuItem to="/textiles">
                        <li className="textiles">Textiles</li>
                    </MenuItem>
                    <MenuItem to="/lighting">
                        <li className="lighting">Lighting</li>
                    </MenuItem>
                    <MenuItem to="/toys">
                        <li className="toys">Toys</li>
                    </MenuItem>
                    <MenuItem to="/decor">
                        <li className="decor">Decor</li>
                    </MenuItem>
                </ul>
                <div className="favorite">
                    <MenuItem to="/wishlist">
                        <Wishlist />
                    </MenuItem>
                </div>
                <MenuItem to="/cart">
                    <CartHeader />
                </MenuItem>
                <div className="btn_free_shipping">
                    <a href="free_shipping">
                        Free shipping for all orders of $1.300
                    </a>
                </div>
            </Toolbar>
        </Container>
    )
}
export default BottomMenu
