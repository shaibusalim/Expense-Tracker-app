import React from 'react'
import { useState } from 'react'
import './Transaction.css'

function Transaction({onIncome, onExpense}) {
    const [displayInput, setDisplayInput] = useState(false)
    const [data, setData] = useState([]);
    const [title,setTitle] = useState("");
    const [amount, setAmount] = useState();
    const [transactionType, setTransactionType] = useState('expense');

    const displayInputFun = ()=>{
        setDisplayInput(!displayInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const info={
            id: data.length+1,
            amount: amount,
            title: title,
            transactionType:transactionType
        }
        if(!amount || !title){
            alert('Amount and Title are required for transactions')
            return;
        }
        if(transactionType == 'income'){
            onIncome(Number(amount));
        }else{
            onExpense(Number(amount));
        }

        setData((prevData) => [...prevData, info]);
        setAmount("")
        setTitle('')
        setTransactionType('expense');
        setDisplayInput(!displayInput);
    }
  return (
    <div className='trans-container'>
        <div className='trans-button'>
            <button onClick={displayInputFun}>Add Transaction</button>
        </div>

        <div className='trans-input'>
                {
                        displayInput && 
                        <div className='display-input-con'>
                            <input
                            required 
                            type='number'  
                            placeholder='Enter amount'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            />
                            <input 
                            required
                            type='text' 
                            placeholder='Enter Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            
                            />
                            <select
                                value={transactionType}
                                onChange={(e) => setTransactionType(e.target.value)}
                            >
                                <option value='income'>Income</option>
                                <option value='expense'>Expense</option>
                            </select>
                            <button onClick={handleSubmit}>Add</button>
                        </div>
                
                }
        </div>
        {
            data.length > 0 &&
            data.map((dt) => (
                <div className='data-container'>
                    <div className={`data-content ${dt.transactionType ==='expense'? 'bg-red':'bg-green'}`}>
                        <p>{dt.title}</p>
                        <p>{dt.amount}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Transaction