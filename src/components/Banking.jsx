// A dumb component!
import React, { useState } from 'react';
import axios from 'axios';

function Banking(props) {
    const [depositAmount, setDepositAmount] = useState(1);
    const [withdrawAmount, setWithdrawAmount] = useState(1);
    return (
        <div>
            <h1>Banking balance: {props.banking} </h1>
            <section>
                <h2>Make a deposit</h2>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        props.deposit(depositAmount);
                        setDepositAmount('');
                    } catch (e) {
                        console.log('uh oh - it did not go through');
                    }
                }}>
                    <label>
                        Deposit Amount:
                        <input 
                            type="number"
                            min="1"
                            value={depositAmount}
                            onChange={(e) => {
                                setDepositAmount(parseFloat(e.target.value))
                            }}
                            />
                    </label>
                    <br />
                    <input type="submit" value="Deposit" />
                </form>
            </section>
            <section>
                <h2>Make a withdrawal</h2>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        props.withdraw(withdrawAmount);
                        setWithdrawAmount('');
                    } catch (e) {
                        console.log('uh oh - it did not go through');
                    }                    
                }}>
                    <label>
                        Withdrawal Amount:
                        <input 
                            type="number"
                            min="1"
                            value={withdrawAmount}
                            onChange={(e) => {
                                setWithdrawAmount(parseFloat(e.target.value))
                            }}
                            />
                    </label>
                    <br />
                    <input type="submit" value="Withdraw" />
                </form>
            </section>            
        </div>
    );
}

export default Banking;