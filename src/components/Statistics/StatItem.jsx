import PropTypes from 'prop-types';
import s from "./Statistics.module.css"


export function StatItem({id,label,percentage}) {
    return (
        <li className={s.item} key={id}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
    )
}

StatItem.propTypes = {
    id:PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired
}