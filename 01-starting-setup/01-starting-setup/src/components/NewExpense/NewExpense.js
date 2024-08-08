import React ,{ useState } from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpeense = (props) => {
    const [use, setUse] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData)
        setUse(false);
    }

    const add = () => {
        setUse(true);
    }
    const cancel = () => {
        setUse(false);
    }

    return (
        <div className='new-expense'>
            {!use && <button onClick={add}>Add New Expense</button>}
            {use && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancel}/>}
        </div>
    )
}

export default NewExpeense;