import Flickity from 'react-flickity-component'
import './SliderMenu.css'

const flickityOptions = {
    initialIndex: 2,
}

type Props = {}
const SliderMenu = (props: Props) => {
    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
            <img src="/images/blog_pictures/furniture-slider-1.jpg" />
            <img src="/images/blog_pictures/furniture-slider-2.jpg" />
            <img src="/images/blog_pictures/furniture-slider-3.jpg" />
        </Flickity>
    )
}
export default SliderMenu
