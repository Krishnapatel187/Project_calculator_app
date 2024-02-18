import React, { useState } from 'react'
import CalcButton from './CalcButton'

const Calculator = () => {

    const [calc, setCalc] = useState({
        current: "0",
        total: "0",
        isInitial: true,
        preOp: ""
    })

    const handleNumber = (value) => {

        if(calc.isInitial){
            calc.current = value;
        }
        else{
            calc.current = calc.current + value;
        }
       
        setCalc({ current: calc.current, total: calc.total, isInitial: false, preOp: calc.preOp});
    }

    const handleOprator = (value) => {
        const total = doCalculation();

        setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: value });

    }

    const doCalculation = () => {

        let total = parseInt(calc.total);
       
        switch (calc.preOp) {
            case "+":
                total += parseInt(calc.current);
                break;
            case "-":
                total -= parseInt(calc.current);
                break;
            case "*":
                total *= parseInt(calc.current);
                break;
            case "÷":
                total /= parseInt(calc.current);
                break;
            default:
                total = parseInt(calc.current);
                break;
        }
        return total;
    }

    const renderDisplay = () => {
        return calc.current;
    }

    const handleClear = () => {
        setCalc({ current: '0', total: '0', isInitial: true, preOp: '' })
    }
    

    return (
        <div className='calculator'>
            <div className='display'>{renderDisplay()}</div>

            <CalcButton value={7} onClick={handleNumber} />
            <CalcButton value={8} onClick={handleNumber} />
            <CalcButton value={9} onClick={handleNumber} />
            <CalcButton className='oprator' value="÷" onClick={handleOprator} />

            <CalcButton value={4} onClick={handleNumber} />
            <CalcButton value={5} onClick={handleNumber} />
            <CalcButton value={6} onClick={handleNumber} />
            <CalcButton className='oprator' value="*" onClick={handleOprator} />

            <CalcButton value={1} onClick={handleNumber} />
            <CalcButton value={2} onClick={handleNumber} />
            <CalcButton value={3} onClick={handleNumber} />
            <CalcButton className='oprator' value="-" onClick={handleOprator} />

            <CalcButton className='oprator' value="C" onClick={handleClear} />
            <CalcButton value={0} onClick={handleNumber} />
            <CalcButton className='oprator' value="=" onClick={handleOprator} />
            <CalcButton className='oprator' value="+" onClick={handleOprator} />
        </div>
    )
}

export default Calculator