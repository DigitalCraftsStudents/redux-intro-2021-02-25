// A dumb component!
import React, { useState } from 'react';

function Banking(props) {
    const [depositAmount, setDepositAmount] = useState(0);
    return (
        <div>
            <h1>Banking balance: {props.banking} </h1>
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
        </div>
    );
}

export default Banking;