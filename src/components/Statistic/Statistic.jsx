import PropTypes from 'prop-types';
import StatisticList from './StatisticList';
import s from './Statistic.module.css'

export default function Statistic (props) {
    const titleStat = <h2 className={s.title}>Upload stats</h2>;
    return(
        <section className={s.statistics}>
            {titleStat}
            <ul className={s.statList}>
            {<StatisticList />}
  </ul>
</section>
    )
};

Statistic.propTypes ={
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
}