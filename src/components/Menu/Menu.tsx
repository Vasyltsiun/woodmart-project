import Button from '@mui/material/Button'
import './Menu.css'

type Props = {}
const Menu = (props: Props) => {
    return (
        <div className="buttons">
            <div>
                <Button className="button" color="inherit">
                    Gift Cards
                </Button>
                <Button className="button" color="inherit">
                    Showrooms
                </Button>
                <Button className="button" color="inherit">
                    About Us
                </Button>
            </div>
            <div>(686) 492-1044</div>
        </div>
    )
}
export default Menu
