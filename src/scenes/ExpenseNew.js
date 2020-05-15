import React, { useState, useContext } from 'react';
import CurrencyInput from 'react-currency-input';
import ExpenseContext from '../context/expenses/expenseContext';

const ExpenseNew = props => {
  const expenseContext = useContext(ExpenseContext);

  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Food');

  const goToList = () => {
    props.history.push('/list');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!amount || !title) {
      alert('Please input Amount and Note');
      return;
    }

    expenseContext.addExpense({ amount, title, category });
    goToList();
  };

  return (
    <form className='expense-form' onSubmit={onSubmit}>
      <div className='section top-section'>
        <div className='header-action'>
          <button className='ui button action' onClick={goToList}>Cancel</button>
          <div className='title'>Expense</div>
          <button className='ui button action'>Done</button>
        </div>

        <div className='form-field amount ui input'>
          <div className='label'>Amount</div>
          <CurrencyInput
            className='field'
            type='text'
            value={amount}
            displaytype={'text'} prefix={'-$'}
            onChange={(formatted, value) => { setAmount(value) }}
          />
        </div>

        <div className='settings'>
          <div className='settings-header'>Settings</div>
          <div className='form-field'>
            <div className='label'>Category</div>
            <span className='clip-select'>
              <select 
                className="ui dropdown field"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value='Food'>Food</option>
                <option value='Leisure'>Leisure</option>
                <option value='Utilities'>Utilities</option>
              </select>
            </span>
          </div>

          <div className='form-field'>
            <div className='label'>Date</div>
            <div className='field'>Today</div>
          </div>
        </div>
      </div>

      <div className='section bottom-section'>
        <div className='notes form-field'>
          <div className='label'>Notes</div>
          <textarea className='field' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
      </div>
    </form>
  )
};

export default ExpenseNew;
