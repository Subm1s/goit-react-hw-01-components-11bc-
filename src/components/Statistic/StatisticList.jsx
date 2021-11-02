// import PropTypes from 'prop-types';
import Static from '../data/statistical-data.json';
import s from './Statistic.module.css';
import {getRandomRgbColor} from './getRandomColor';


export default function StatisticList (props) {
    // const {label, percentage} = props;
    return(
      Static.map(el => (
        <li className={s.item} key={el.id} style={{backgroundColor: getRandomRgbColor()}}>
          <span className={s.label}>{el.label}</span>
          <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ),)
    )
};
