import PropTypes from 'prop-types';
import s from "./Profile.module.css"

export function Profile(props) {
    return (
        <div className={s.profile}>
  <div className={s.description}>
    <img
      src={props.avatar}
      alt="User avatar"
      className={s.avatar}
    />   
  </div>

  <ul className={s.stats}>
          <li>
             <p className={s.name}>{props.username}</p>
    <p className={s.tag}>{props.tag}</p>
    <p className={s.location}>{props.location}</p>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{props.stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{props.stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{props.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number
}