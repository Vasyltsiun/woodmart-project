import Flickity from 'react-flickity-component'
import './SliderMenu.css'

const flickityOptions = {
    initialIndex: 2,
}

type Props = {}
const SliderMenu = (props: Props) => {
    return (
        <Flickity
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
        >
            <img
                src="/images/blog_pictures/furniture-slider-1.jpg"
                alt="furniture-slider-1"
            />
            <img
                src="/images/blog_pictures/furniture-slider-2.jpg"
                alt="furniture-slider-2"
            />
            <img
                src="/images/blog_pictures/furniture-slider-3.jpg"
                alt="furniture-slider-3"
            />
        </Flickity>
    )
}
export default SliderMenu
