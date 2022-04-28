import PropTypes from 'prop-types';
import s from "./Statistics.module.css"


export function StatItem(props) {
    return (
        <li className={s.item} key={props.id}>
      <span className={s.label}>{props.label}</span>
      <span className={s.percentage}>{props.percentage}</span>
    </li>
    )
}

StatItem.propTypes = {
    label: PropTypes.string,
    percentage:PropTypes.number
}