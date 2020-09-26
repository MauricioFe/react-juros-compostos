import React from 'react'


export default function Form({ data, onChangeData }) {
    const { initialValue, monthlyPeriod, monthlyInterest } = data;
    const handleChangeInitialValue = (event) => {
        onChangeData(+event.target.value, null, null);
    }
    const handleChangeMonthlyInterest = (event) => {
        onChangeData(null, +event.target.value, null);
    }
    const handleChangeMonthlyPeriod = (event) => {
        onChangeData(null, null, +event.target.value);
    }
    return (
        <div className='row'>
            <div className="input-field col s12 m4">
                <input id="capitalInicialInput" type="number" value={initialValue} min={0} max={100000} step={100} onChange={handleChangeInitialValue} />
                <label className='active' htmlFor="capitalInicialInput">Capital Inicial</label>
            </div>
            <div className="input-field col s12 m4">
                <input id="taxaJurosInput" type="number" value={monthlyInterest} min={-12} max={12} step={0.1} onChange={handleChangeMonthlyInterest} />
                <label className='active' htmlFor="taxaJurosInput">Taxa de juros mensal</label>
            </div>
            <div className="input-field col s12 m4">
                <input id="periodoInput" type="number" value={monthlyPeriod} min={1} max={36} step={1} onChange={handleChangeMonthlyPeriod} />
                <label className='active' htmlFor="periodoInput">Período (meses)</label>
            </div>

        </div>
    )
}
