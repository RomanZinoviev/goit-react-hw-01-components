import PropTypes from 'prop-types';
import s from "../Friends/FriendList.module.css"

export function FriendListItem({id,isOnline,avatar,name}) {
    return (
        <li className={s.item} key={id}>
  <span className={isOnline?s.green:s.red}></span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    id:PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
}