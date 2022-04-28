import PropTypes from 'prop-types';
import s from "./TransactionHistory.module.css"

export function TransactionHistory(props) {
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
                {props.items.map((item) =>
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>)}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        type: PropTypes.string,
    amount: PropTypes.string,
      currency: PropTypes.string,
    id:PropTypes.string
      })
    )   
}