import { StyledEngineProvider } from '@mui/material'
import SliderMain from 'components/SliderMain/SliderMain'
import Main from 'layout/Main'

type Props = {}
const HomePage = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <SliderMain />
            <Main />
        </StyledEngineProvider>
    )
}
export default HomePage
