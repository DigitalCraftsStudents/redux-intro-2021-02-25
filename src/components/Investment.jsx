import React, { useState } from 'react';

function Investment(props) {
    const [depositAmount, setDepositAmount] = useState(1);
    const [withdrawalAmount, setWithdrawalAmount] = useState(1);
    return (
        <div>
            <h1>Investment balance: {props.investment}</h1>
            <section>
                <h2>Make a deposit</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    props.deposit(depositAmount);
                }}>
                    <label>
                        Deposit Amount:
                        <input 
                            type="number"
                            min="1"
                            value={depositAmount}
                            onChange={(e) => {
                                setDepositAmount(parseFloat(e.target.value));
                            }}
                        />
                        <br />
                        <input type="submit" value="Deposit" />
                    </label>

                </form>
            </section>
            <section>
                <h2>Make a withdrawal</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    props.withdraw(withdrawalAmount);
                }}>
                    <label>
                        Withdrawal Amount:
                        <input 
                            type="number"
                            min="1"
                            value={withdrawalAmount}
                            onChange={(e) => {
                                setWithdrawalAmount(parseFloat(e.target.value));
                            }}
                        />
                        <br />
                        <input type="submit" value="Withdraw" />
                    </label>
                </form>
            </section>

        </div>
    )
}

export default Investment