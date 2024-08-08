import React, { useState } from 'react';

import NewExpeense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  {id: 'e2', title: 'ABC Data', amount: 90.30, date: new Date(2022, 5, 15)},
  {id: 'e3', title: 'New test', amount: 100.70, date: new Date(2023, 7, 31)},
  {id: 'e4', title: 'last test', amount: 30.1, date: new Date(2020, 1, 7)},
  {id: 'e5', title: 'test_1', amount: 30.1, date: new Date(2020, 3, 27)},
  {id: 'e6', title: 'test_2', amount: 30.1, date: new Date(2022, 2, 1)},
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })  
  }
  
  return (
    <div>
      <NewExpeense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>  
    </div>
  );
}

export default App;
