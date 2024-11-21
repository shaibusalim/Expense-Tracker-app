import React from 'react'
import './Balance.css';
import { useState } from 'react';
import Transaction from './Transaction';


function Balance() {

    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const onIncome = (amount) => {
        setIncome(income+amount );
        setBalance(balance+amount);
    }

    const onExpense = (amount) => {
        setExpense(expense+amount);
        setBalance(balance-amount);
    }
  return (
    <div className='balance-container'>
        <p>Balance: <span>{balance}</span></p>

        <div className='inc-exp-con'>
                <div className='inc'>
                    Income:<span>{income}</span>
                </div>
                <div className='exp'>
                    Expense:<span>{expense}</span>
                </div>
        </div>
        <Transaction onIncome={onIncome} onExpense={onExpense}/>
    </div>
  )
}

export default Balance;