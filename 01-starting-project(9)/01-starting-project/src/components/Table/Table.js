import React from 'react';
import './Table.css';

const Table = (props) => {
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tableData.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.savingsEndOfYear}</td>
                                <td>{item.yearlyInterest}</td>
                                <td>{item.year}</td>
                                <td>{item.yearlyContribution}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;