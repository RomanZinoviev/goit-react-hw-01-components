import PropTypes from 'prop-types';


export function StatItem(props) {
    return (
        <li className="item" key={props.id}>
      <span className="label">{props.label}</span>
      <span className="percentage">{props.percentage}</span>
    </li>
    )
}

StatItem.propTypes = {
    label: PropTypes.string,
    percentage:PropTypes.number
}