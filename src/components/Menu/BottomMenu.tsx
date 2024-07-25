import './BottomMenu.css'

type Props = {}
const BottomMenu = (props: Props) => {
    return (
        <>
            <ul className="bottom_menu">
                <li className="chairs">
                    <a href="">Chairs</a>
                </li>
                <li className="tablets">
                    <a href="">Tablets</a>
                </li>
                <li className="sofas">
                    <a href="">Sofas</a>
                </li>
                <li className="armchairs">
                    <a href="">Armchairs</a>
                </li>
                <li className="beds">
                    <a href="">Beds</a>
                </li>
                <li className="storage">
                    <a href="">Storage</a>
                </li>
                <li className="textiles">
                    <a href="">Textiles</a>
                </li>
                <li className="lighting">
                    <a href="">Lighting</a>
                </li>
                <li className="toys">
                    <a href="">Toys</a>
                </li>
                <li className="decor">
                    <a href="">Decor</a>
                </li>
            </ul>
            <div className="btn_free_shipping">
                <a href="">Free shipping for all orders of $1.300</a>
            </div>
        </>
    )
}
export default BottomMenu
