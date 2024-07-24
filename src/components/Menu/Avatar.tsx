import './Avatar.css'

type Props = {}
const Avatar = (props: Props) => {
    return (
        <div className="header_avatars">
            <div>
                <img src="../images/avatars/first_avatar.png" alt="" />
            </div>
            <div className="header_contact">Contact with an expert</div>
        </div>
    )
}
export default Avatar
