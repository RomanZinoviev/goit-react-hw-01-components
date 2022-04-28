import PropTypes from 'prop-types';

export function TransactionHistory(props) {
    return (
        <table className="transaction-history">
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
    items:PropTypes.array,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency:PropTypes.string
}