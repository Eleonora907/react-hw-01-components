import PropTypes from 'prop-types';
import {
  TransBody,
  TransColumn,
  TransHeader,
  TransItem,
  TransTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransTable>
      <thead>
        <tr>
          <TransHeader>Type</TransHeader>
          <TransHeader>Amount</TransHeader>
          <TransHeader>Currency</TransHeader>
        </tr>
      </thead>

      <TransBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransItem key={id}>
              <TransColumn>{type}</TransColumn>
              <TransColumn>{amount}</TransColumn>
              <TransColumn>{currency}</TransColumn>
            </TransItem>
          );
        })}
      </TransBody>
    </TransTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
