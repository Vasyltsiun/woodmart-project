import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Logo from '../components/Logo/Logo'
import Menu from '../components/Menu/Menu'
import Avatar from '../components/Menu/Avatar'
import Search from '../components/Menu/Search'

import './Header.css'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            {' '}
            <AppBar
                position="static"
                sx={{ backgroundColor: 'rgba(16, 16, 16, 0.06)' }}
            >
                <Container className="main_container" sx={{ padding: '0px' }}>
                    <Toolbar>
                        <Menu />
                        <Avatar />
                    </Toolbar>
                    <Toolbar className="middle_header">
                        <Logo />
                        <Search />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header
