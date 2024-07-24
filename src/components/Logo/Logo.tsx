import Typography from '@mui/material/Typography'
import logo from 'assets/woodmart-logo.svg'

type Props = {}
const Logo = (props: Props) => {
    return (
        <>
            <Typography>
                <img src={logo} alt="" />
            </Typography>
        </>
    )
}
export default Logo
