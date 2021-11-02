import PropTypes from 'prop-types';
import StatisticList from './StatisticList';
import s from './Statistic.module.css'

export default function Statistic ({title, stats}) {
    return(
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
            {<StatisticList />}
  </ul>
</section>
    )
};

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
      }).isRequired
    )
  };