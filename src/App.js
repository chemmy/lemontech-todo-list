import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Landing from './scenes/Landing';
import ExpensesList from './scenes/ExpensesList';
import ExpenseNew from './scenes/ExpenseNew';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/list' component={ExpensesList} />
        <Route exact path='/new' component={ExpenseNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
