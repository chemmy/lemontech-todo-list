import React, { useReducer } from 'react';
import {v1 as uuid} from "uuid"; 
import moment from 'moment';
import ExpenseContext from './expenseContext';
import expenseReducer from './expenseReducer';
import { GET_EXPENSES_LIST, GET_FILTERED_LIST, ADD_EXPENSE } from '../types';

const AlertState = props => {
  const savedList = [
    { id: 1, title: 'First Expense', category: 'Food', amount: '250', date: 'May 14 2020 21:00:02' },
    { id: 2, title: 'Flight ticket', category: 'Leisure', amount: '10000', date: 'May 14 2020 21:00:02' },
    { id: 3, title: 'Internet Payment', category: 'Utilities', amount: '2000', date: 'May 14 2020 21:00:02' },
  ];
  const initialState = {
    allExpenses: savedList,
    filteredExpensesList: savedList,
  }

  const [state, dispatch] = useReducer(expenseReducer, initialState);
  
  const getExpenses = () => {
    dispatch({
      type: GET_EXPENSES_LIST,
      payload: state,
    });
  };
  
  const getFilteredExpenses = (strFilter) => {
    dispatch({
      type: GET_FILTERED_LIST,
      payload: strFilter,
    });
  }

  const addExpense = (form) => {
    const newExpense = {
      id: uuid(),
      ...form,
      date: moment().format('MMM DD, YYYY HH:mm:ss')
    }
    dispatch({
      type: ADD_EXPENSE,
      payload: newExpense,
    })
  }

  return (
    <ExpenseContext.Provider
      value={{
        allExpenses: state.allExpenses,
        filteredExpensesList: state.filteredExpensesList,
        getExpenses,
        getFilteredExpenses,
        addExpense,
      }}
    >
      { props.children }
    </ExpenseContext.Provider>
  )
};

export default AlertState;