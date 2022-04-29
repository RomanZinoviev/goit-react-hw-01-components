import PropTypes from 'prop-types';
import s from "./TransactionHistory.module.css"

export function TransactionHistory({items}) {
    return (
        <table className={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
          {items.map((item) =>
            <Transaction
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />)}    
  </tbody>
</table>
    )
}
function Transaction(props) {
  return (
    <tr key={props.id}>
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
    </tr>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array
}
Transaction.propTypes = {
     type: PropTypes.string,
    amount: PropTypes.string,
      currency: PropTypes.string,
    id:PropTypes.string
  }  
       
      
      
