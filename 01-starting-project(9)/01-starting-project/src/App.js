import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

function App() {
  const [tableList, setTableList] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setTableList(yearlyData)
  };

  return (
    <div>
      <Header />
      <Form onSubmitData={calculateHandler}/>
      <Table tableData={tableList}/>
    </div>
  );
}

export default App;
