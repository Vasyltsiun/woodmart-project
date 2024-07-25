import './BottomMenu.css'

type Props = {}
const BottomMenu = (props: Props) => {
    return (
        <>
            <ul className="bottom_menu">
                <li className="chairs">
                    <a href="chairs">Chairs</a>
                </li>
                <li className="tablets">
                    <a href="tablets">Tablets</a>
                </li>
                <li className="sofas">
                    <a href="sofas">Sofas</a>
                </li>
                <li className="armchairs">
                    <a href="armchairs">Armchairs</a>
                </li>
                <li className="beds">
                    <a href="beds">Beds</a>
                </li>
                <li className="storage">
                    <a href="storage">Storage</a>
                </li>
                <li className="textiles">
                    <a href="textiles">Textiles</a>
                </li>
                <li className="lighting">
                    <a href="lighting">Lighting</a>
                </li>
                <li className="toys">
                    <a href="toys">Toys</a>
                </li>
                <li className="decor">
                    <a href="decor">Decor</a>
                </li>
            </ul>
            <div className="btn_free_shipping">
                <a href="free_shipping">
                    Free shipping for all orders of $1.300
                </a>
            </div>
        </>
    )
}
export default BottomMenu
