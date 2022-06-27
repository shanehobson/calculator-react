import { React,  useState } from 'react';

export const Calculator = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [currentNumber, setCurrentNumber] = useState('');

    const handleNumClick = (e) => {
        const number = e.target.id;
        let newNumber = '';
        if (operator) {
            newNumber = num2 + number;
            setNum2(newNumber);
            setCurrentNumber(newNumber);
        } else {
            newNumber = num1 + number;
            setNum1(newNumber);
            setCurrentNumber(newNumber);
        }
     }

     const handleOperatorClick = (e) => {
        const clickedOperator = e.target.id;
        if (!operator) setOperator(clickedOperator);
     }

     const calculate = () => {
        if (num1 && num2 && operator) {
            const num1AsNumber = parseStrToNum(num1);
            const num2AsNumber = parseStrToNum(num2);
            let result;
            switch (operator) {
                case 'add':
                    result = num1AsNumber + num2AsNumber;
                    break;
                case 'subtract':
                    result = num1AsNumber - num2AsNumber;
                    break;
                case 'multiply':
                    result = num1AsNumber * num2AsNumber;
                    break;
                case 'divide':
                    result = num2AsNumber ? num1AsNumber / num2AsNumber : 0;
                    break;
                default:
                    break;
            }
            result = result.toString();
            setCurrentNumber(result);
            setNum1(result);
            setNum2('');
            setOperator('');
        }
     }

     const clear = () => {
        setOperator('');
        setNum1('');
        setNum2('');
        setCurrentNumber('');
     }

     const parseStrToNum = str => {
        let digits = str.split('.')[0];
        let decimals = str.split('.')[1];
        if (digits[0] === '0') digits = digits.slice(1);
        digits = parseInt(digits);
        if (decimals && decimals.length) {
            decimals = parseInt(decimals);
            const fraction = decimals / (10 ^ decimals.length);
            return digits += fraction;
        } else {
            return digits;
        }
     }
    

    return (
        <div className="calculator">
            <div className="header">
                <div className="result-box">
                    <span id="currentNum">{currentNumber || '0'}</span>
                </div>
            </div>
            <div className="body">
                <div className="row">
                <span></span>
                <span></span>
                <span></span>
                    <button className="operation" onClick={clear}>AC</button>
                </div>
                <div className="row">
                    <button id="7" onClick={handleNumClick}>7</button>
                    <button id="8" onClick={handleNumClick}>8</button>
                    <button id="9" onClick={handleNumClick}>9</button>
                    <button id="divide" className="operation" onClick={handleOperatorClick}>/</button>
                </div>
                <div className="row">
                    <button id="4" onClick={handleNumClick}>4</button>
                    <button id="5" onClick={handleNumClick}>5</button>
                    <button id="6" onClick={handleNumClick}>6</button>
                    <button id="multiply" className="operation" onClick={handleOperatorClick}>X</button>
                </div>
                <div className="row">
                    <button id="1" onClick={handleNumClick}>1</button>
                    <button id="2" onClick={handleNumClick}>2</button>
                    <button id="3" onClick={handleNumClick}>3</button>
                    <button id="subtract" className="operation" onClick={handleOperatorClick}>-</button>
                </div>
                <div className="row">
                    <button id="0" onClick={handleNumClick}>0</button>
                    <button id="." onClick={handleNumClick}>.</button>
                    <button className="operation" onClick={calculate}>=</button>
                    <button id="add" className="operation" onClick={handleOperatorClick}>+</button>
                </div>
            </div>
        </div>
    )
}