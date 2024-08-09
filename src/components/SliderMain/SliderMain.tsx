import Flickity from 'react-flickity-component'
import './SliderMain.css'
import { sliderArrey } from 'utils/sliderArrey'
import SliderMainItem from './SliderMainItem'

const flickityOptions = {
    initialIndex: 2,
}

type Props = {}
const SliderMain = (props: Props) => {
    return (
        <Flickity
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
        >
            {' '}
            {sliderArrey.map(
                ({ icon, image, iconautor, title, text, autor, price }) => (
                    <>
                        <SliderMainItem
                            icon={icon}
                            image={image}
                            iconautor={iconautor}
                            text={text}
                            title={title}
                            autor={autor}
                            price={price}
                        />
                    </>
                )
            )}
        </Flickity>
    )
}
export default SliderMain
