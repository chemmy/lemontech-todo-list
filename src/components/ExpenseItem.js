import React from 'react';
import icon from '../assets/icon-expense.svg';
import { getCurrencyFormat } from '../helpers/currency';

const ExpenseItem = ({ expense }) => {
  const { title, category, date, amount } = expense;

  const renderExpenseDetails = () => {
    return `${date} ${date && category ? '-' : ''} ${category}`;
  }

  return (
    <div className='expense-item'>
      <div className='detail'>
        <img src={icon} alt='+' />
        <div className='meta'>
          <div className='title'>{title}</div>
          <div className='info'>{renderExpenseDetails()}</div>
        </div>
      </div>
      <div className='amount'>{getCurrencyFormat(amount)}</div>
    </div>
  )
}

export default ExpenseItem;
