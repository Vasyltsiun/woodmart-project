import { StyledEngineProvider } from '@mui/material'
import Main from 'layout/Main'

type Props = {}
const HomePage = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <Main />
        </StyledEngineProvider>
    )
}
export default HomePage
