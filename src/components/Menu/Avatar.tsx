import './Avatar.css'

type Props = {}
const Avatar = (props: Props) => {
    return (
        <div className="header_avatars">
            <div className="avatars_images">
                <img src="../images/avatars/first_avatar.png" alt="" />
            </div>
            <div className="header_contact">
                <button className="button">Contact with an expert</button>
            </div>
        </div>
    )
}
export default Avatar
