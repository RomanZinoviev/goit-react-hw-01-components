import PropTypes from 'prop-types';
import s from "../Friends/FriendList.module.css"

export function FriendListItem(props) {
    return (
        <li className={s.item} key={props.id}>
  <span className={props.isOnline?s.green:s.red}></span>
  <img className={s.avatar} src={props.avatar} alt="User avatar" width="48" />
  <p className={s.name}>{props.name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name:PropTypes.string
}