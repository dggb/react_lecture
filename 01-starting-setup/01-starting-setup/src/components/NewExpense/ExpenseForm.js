import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // 이 방식은 여러개의 상태 업데이트를 할 경우 안 좋다.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })

        // 이 방식은 내부에서 제공하는 함수로 인해 상태가 항상 최신 상태 스냅샷이 되도록 보장을 해준다.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle:event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount:event.target.value}
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate:event.target.value}
        // })
    }

    // const inputChangeHandler = (identifiter, value) => {
    //     if (identifiter === 'title') {
    //         setEnteredTitle(value)
    //     } else if (identifiter === 'date'){
    //         setenteredDate(value)
    //     } else {
    //         setenteredAmount(value)
    //     }
    // }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm