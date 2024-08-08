import React, { useState } from 'react';
import './Form.css';

// 내가 한 버전
// const Form = (props) => {
//     const [currentSavings, setCurrentSavings] = useState(0);
//     const [yearlyContribution, setYearlyContribution] = useState(0);
//     const [expectedReturn, setExpectedReturn] = useState(0);
//     const [duration, setDuration] = useState(0);

//     const calculateInput = () => {
//         const userInput = {
//             'current-savings' : +currentSavings,
//             'yearly-contribution' : +yearlyContribution,
//             'expected-return' : +expectedReturn,
//             'duration' : +duration,
//         }

//         props.onSubmitData(userInput)
//     }

//     const resetClick = () => {
//         setCurrentSavings(data => data = 0);
//         setYearlyContribution(data => data = 0);
//         setExpectedReturn(data => data = 0);
//         setDuration(data => data = 0);
//     }

//     return (
//         <div className="form">
//             <div className="input-group">
//                 <p>
//                     <label htmlFor="current-savings">Current Savings ($)</label>
//                     <input type="number" id="current-savings" 
//                         value={currentSavings}
//                         onChange={(e) => setCurrentSavings(data => data = e.target.value)}
//                     />
//                 </p>
//                 <p>
//                     <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
//                     <input type="number" id="yearly-contribution" 
//                         value={yearlyContribution}
//                         onChange={(e) => setYearlyContribution(data => data = e.target.value)}
//                     />
//                 </p>
//             </div>
//             <div className="input-group">
//                 <p>
//                     <label htmlFor="expected-return">
//                     Expected Interest (%, per year)
//                     </label>
//                     <input type="number" id="expected-return" 
//                         value={expectedReturn}
//                         onChange={(e) => setExpectedReturn(data => data = e.target.value)}
//                     />
//                 </p>
//                 <p>
//                     <label htmlFor="duration">Investment Duration (years)</label>
//                     <input type="number" id="duration" 
//                         value={duration}
//                         onChange={(e) => setDuration(data => data = e.target.value)}
//                     />
//                 </p>
//             </div>
//             <p className="actions">
//                 <button type="reset" className="buttonAlt" onClick={resetClick}>
//                     Reset
//                 </button>
//                 <button type="submit" className="button" onClick={calculateInput}>
//                     Calculate
//                 </button>
//             </p>
//         </div>
//     )
// }

// 강사님 버전
const initialUserInput = {
    'current-savings' : 10000,
    'yearly-contribution' : 1200,
    'expected-return' : 7,
    duration : 10,
};

const Form = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const calculateInput = (event) => {
        event.preventDefault();
        props.onSubmitData(userInput)
    }

    const resetClick = () => {
        setUserInput(initialUserInput)
    }

    const inputChange = (input ,value) => {
        setUserInput(data => {
            return{
                ...data,
                [input] : +value
            }
        })
    } 
    
    return (
        <form className="form" onSubmit={calculateInput} >
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" 
                        value={userInput['current-savings']}
                        onChange={(e) => inputChange('current-savings',e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" 
                        value={userInput['yearly-contribution']}
                        onChange={(e) => inputChange('yearly-contribution',e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" 
                        value={userInput['expected-return']}
                        onChange={(e) => inputChange('expected-return',e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" 
                        value={userInput['duration']}
                        onChange={(e) => inputChange('duration',e.target.value)}
                    />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetClick}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form;