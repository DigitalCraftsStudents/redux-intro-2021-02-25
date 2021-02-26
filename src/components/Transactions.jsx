import React from 'react';

function Transactions(props) {
    return (
        <section>
            <ul>
                {props.transactions.map(t => {
                    return (
                        <li
                            key={t.date.getTime()}
                        >
                            {t.type}: 
                            ${t.amount} on {t.date.toLocaleString()}</li>
                    )
                })}
            </ul>
        </section>
    );
}

export default Transactions;