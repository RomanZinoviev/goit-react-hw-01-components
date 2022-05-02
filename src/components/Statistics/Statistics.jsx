import PropTypes from 'prop-types';
import { StatItem } from './StatItem';
import s from "./Statistics.module.css"


export function Statistics({title, data}) {
    return (
        <section className={s.statistics}>
            {title&&<h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
                {data.map(({id,label,percentage}) => 
                    <StatItem
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                )}
  </ul>
</section>
    )
} 
Statistics.propTypes = {
    data: PropTypes.array.isRequired,
    title:PropTypes.string
}