import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [filterData, setFilterData] = useState('2023');

    const filterChange = (selected) => {
        setFilterData(selected)
    }

    const filter = props.item.filter(item => {
        return item.date.getFullYear().toString() === filterData;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterData} onFilterChange={filterChange}/>
            <ExpensesChart expenses={filter}/>
            <ExpensesList item={filter}/>
            {/* 1안 */}
            {/* {filter.length === 0 && <p> No expenses found. </p> }
            {filter.length > 0 &&
                filter.map((item)=> {
                    return <ExpenseItem key={item.id} item={item}/>
                })
            } */}

            {/* 2안 */}
            {/* {filter.length === 0 ? ( 
                <p> No expenses found. </p> 
            ) : (
                filter.map((item)=> {
                    return <ExpenseItem key={item.id} item={item}/>
                }))
            } */}

            {/* 3안 */}
            {/* {content} */}
        </Card>
    );
}

export default Expenses;