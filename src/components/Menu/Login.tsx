import './Login.css'

type Props = {}
const Login = (props: Props) => {
    return (
        <div className="login_register_menu">
            <span className="login_icon"></span>
            <a className="login_button" href="login">
                Login / Register
            </a>
        </div>
    )
}
export default Login
