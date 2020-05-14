import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input';

const ExpenseNew = props => {
  const [amount, setAmount] = useState(0);

  return (
    <form className='expense-form' onSubmit={() => props.history.push('/list')}>
      <div className='section top-section'>
        <div className='header-action'>
          <button className='ui button action'>Cancel</button>
          <div className='title'>Expense</div>
          <button className='ui button action'>Done</button>
        </div>

        <div className='form-field amount ui input'>
          <div className='label'>Amount</div>
          <CurrencyInput
            className='field'
            type='text'
            value={amount}
            displayType={'text'} prefix={'-$'}
            onChange={(values) => setAmount(values)}
          />
        </div>

        <div className='settings'>
          <div className='settings-header'>Settings</div>
          <div className='form-field'>
            <div className='label'>Category</div>
            <span className='clip-select'>
              <select class="ui dropdown field">
                <option value="1">Food</option>
                <option value="2">Leisure</option>
                <option value="3">Utilities</option>
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
          <textarea className='field' />
        </div>
      </div>
    </form>
  )
};

export default ExpenseNew;
