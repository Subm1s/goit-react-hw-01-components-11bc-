import TransactionList from './TransactionList';
import s from './Transaction.module.css';


export default function Transaction (){
    return(
        <table class={s.transactoinHistory}>
  <thead className={s.header}>
    <tr>
      <th className={s.tableColumn}>Type</th>
      <th className={s.tableColumn}>Amount</th>
      <th className={s.tableColumn}>Currency</th>
    </tr>
  </thead>

  <tbody>
   <TransactionList />
  </tbody>
</table>
    )
};
