import React from 'react';
import ExpenseItem from './../components/ExpenseItem';
import SearchBar from './../components/Searchbar';

const ExpensesList = props => {
  const list = [
    { id: 1, title: 'First Expense', category: 'Food', amount: '250', date: 'May 14 2020 21:00:02' },
    { id: 2, title: 'Flight ticket', category: 'Leisure', amount: '10000', date: 'May 14 2020 21:00:02' },
    { id: 3, title: 'Internet Payment', category: 'Utilities', amount: '2000', date: 'May 14 2020 21:00:02' },
  ];

  return (
    <div className='expense-list'>
      <div className='list-header'>
        <SearchBar />
        <button className='ui button' onClick={() => props.history.push('/new')}>Add new</button>
      </div>
      <div className='items'>
        {list.map(item => <ExpenseItem expense={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default ExpensesList
