import {
  TransactionHead,
  TransactionTable,
  TransactionTh,
  TransactionBody,
  TransactionTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <tr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </tr>
      </TransactionHead>

      <TransactionBody>
        {items.map((item, index) => {
          const { id, type, amount, currency } = item;
          return (
            <TransactionTr key={id} $even={index % 2 === 0}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TransactionTr>
          );
        })}
      </TransactionBody>
    </TransactionTable>
  );
};
