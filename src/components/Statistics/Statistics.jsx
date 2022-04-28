import PropTypes from 'prop-types';
import { StatItem } from './StatItem';


export function Statistics(props) {
    return (
        <section className="statistics">
  <h2 className="title">"Upload stats"</h2>
            <ul className="stat-list">
                {props.data.map((dat) => 
                    <StatItem
                        key={dat.id}
                        label={dat.label}
                        percentage={dat.percentage}
                    />
                )}
  </ul>
</section>
    )
} 