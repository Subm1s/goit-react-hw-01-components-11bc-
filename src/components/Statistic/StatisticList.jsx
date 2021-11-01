import PropTypes from 'prop-types';
import Static from '../../statistical-data.json'
import s from './Statistic.module.css'


export default function StatisticList (props) {
    // const {label, percentage} = props;
    return(
      Static.map(el => (
        <li className={s.item} key={el.id}>
          <span className={s.label}>{el.label}</span>
          <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ),)
    )
};

StatisticList.propTypes ={
  label:PropTypes.string,
  percentage:PropTypes.number,
}