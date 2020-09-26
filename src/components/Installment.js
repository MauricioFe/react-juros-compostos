import React from 'react'
const moneyFormatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})
function formatMoney(value) {
    return moneyFormatter.format(value);
}
function formatMoneyPositiveNegative(value) {
    const money = moneyFormatter.format(value);
    if (value >= 0) {
        return `+${money}`
    }
    return money;
}
function formatPercentage(value) {
    return value.toFixed(2).replace('.', ',') + '%'
}

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
                <span style={{ marginRight: '5px' }}>{id}</span>
                <div>
                    <div className={classValue}>{formatMoney(value)}</div>
                    <div className={classValue}>{formatMoneyPositiveNegative(difference)}</div>
                    <div className={classPercentage}>{formatPercentage(percentage)}</div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    flexRow: {
        display: 'flex',
        flexDirection: 'colunm',
        justifyContent:'space-around',
        alignItems: 'center',
        borderRadius: '4px',
        padding: '4px',
        margin: '4px',
    }
}
