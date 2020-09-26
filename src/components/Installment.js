import React from 'react'

export default function Installment({ data }) {
    const { id, value, difference, percentage, profit } = data;
    const classGoodValue = 'green-text darken-4';
    const classGoodPercentage = 'blue-text darken-4';
    const classBadValue = 'red-text darken-4';
    const classBadPercentage = 'orange-text darken-4';

    const classValue = profit ? classGoodValue : classBadValue;
    const classPercentage = profit ? classGoodPercentage : classBadPercentage;
    return (
        <div className="col s6 m3 l2">
            <div className='card' style={styles.flexRow}>
                <span  style={{marginRight: '5px'}}>{id}</span>
                <div>
                    <div>{value}</div>
                    <div>{difference}</div>
                    <div>{percentage}</div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    flexRow :{
        display: 'flex',
        flexDirection: 'colunm',
        alignItems: 'center',
        borderRadius: '4px',
        padding: '4px',
        margin:'4px',
    }
}
