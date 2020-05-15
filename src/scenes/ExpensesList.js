import React, { useContext } from 'react';
import ExpenseContext from '../context/expenses/expenseContext';
import ExpenseItem from './../components/ExpenseItem';
import SearchBar from './../components/Searchbar';

const ExpensesList = props => {
  const expenseContext = useContext(ExpenseContext);

  return (
    <div className='expense-list'>
      <div className='list-header'>
        <SearchBar onSubmit={(strFilter) => {
          expenseContext.getFilteredExpenses(strFilter || '')
        }} />
        <button className='ui button' onClick={() => props.history.push('/new')}>Add new</button>
      </div>
      <div className='items'>
        {expenseContext.filteredExpensesList.map(item => <ExpenseItem expense={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default ExpensesList
