import { Button } from '@mui/material'
import './SliderMain.css'

type Props = {
    icon: string
    image: string
    iconautor: string
    text: string
    title: string
    autor: string
    price: string
}

const SliderMainItem = ({
    icon,
    image,
    iconautor,
    text,
    title,
    autor,
    price,
}: Props) => {
    return (
        <>
            <div className="slider_image">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="slider_content">
                    <div className="top_text_content">
                        <img src={icon} alt="" />
                        <p className="top_text_slider">{title}</p>
                    </div>
                    <div>
                        <p className="main_text_slider">{text}</p>
                        <div className="choose_autor">
                            <img
                                className="autor_icon"
                                src={iconautor}
                                alt=""
                            />
                            <p className="main_text_slider">{autor}</p>
                        </div>
                    </div>
                    <div className="shop_now_content">
                        <Button className="slider_button" variant="outlined">
                            Shop now
                        </Button>
                        <p className="slider_price">{price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SliderMainItem
