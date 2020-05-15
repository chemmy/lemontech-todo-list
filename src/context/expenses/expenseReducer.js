import { GET_EXPENSES_LIST, GET_FILTERED_LIST, ADD_EXPENSE } from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_EXPENSES_LIST:
      return action.payload;
    case GET_FILTERED_LIST:
      const list = state.allExpenses.filter(expense => {
        const title = expense.title.toLowerCase();
        return title.includes(action.payload.toLowerCase())
      });
      return { ...state, filteredExpensesList: list};
    case ADD_EXPENSE:
      const newList = [action.payload, ...state.allExpenses];
      return { ...state, allExpenses: newList, filteredExpensesList: newList };
    default:
      return state;
  };
};