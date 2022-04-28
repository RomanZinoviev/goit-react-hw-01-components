import PropTypes from 'prop-types';

export function FriendListItem(props) {
    return (
        <li className="item" key={props.id}>
  <span className={props.isOnline?"gren":"red"}></span>
  <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
  <p className="name">{props.name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name:PropTypes.string
}