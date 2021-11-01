import PropTypes from 'prop-types';
import transaction from '../../transactions.json';
import s from './Transaction.module.css'


export default function TransactionList (){
    return(
 transaction.map(el =>(
    <tr className={s.tableRow} key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
 ))  
    )
};

TransactionList.PropTypes ={
  type: PropTypes.string,
  amount:PropTypes.number,
  currency:PropTypes.string,
}
