import PropTypes from 'prop-types';
import { StatItem } from './StatItem';
import s from "./Statistics.module.css"


export function Statistics(props) {
    return (
        <section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>
            <ul className={s.statList}>
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
Statistics.propTypes = {
    data:PropTypes.array
}