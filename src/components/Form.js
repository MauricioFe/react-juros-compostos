import React from 'react'


export default function Form({ onChangePeriod, onChangeCapital, onChangeTax }) {
    const handleCapitalChange = (event) => {
        const capitalValue = event.target.value;

        onChangeCapital(capitalValue);
    }
    const handleTaxChange = (event) => {
        const taxValue = event.target.value;

        onChangeTax(taxValue);
    }
    const handlePeriodChange = (event) => {
        const periodValue = event.target.value;

        onChangePeriod(periodValue);
    }
    return (
        <div className='row'>
            <div className="input-field col s12 m4">
                <input id="capitalInicialInput" type="number" min={0} max={100000} step={100} onChange={handleCapitalChange} />
                <label className='active' htmlFor="capitalInicialInput">Capital Inicial</label>
            </div>
            <div className="input-field col s12 m4">
                <input id="taxaJurosInput" type="number" min={-12} max={12} step={0.1} onChange={handleTaxChange} />
                <label className='active' htmlFor="first_name">Taxa de juros mensal</label>
            </div>
            <div className="input-field col s12 m4">
                <input id="periodoInput" type="number" min={1} max={36} step={1} onChange={handlePeriodChange} />
                <label className='active' htmlFor="periodoInput">Período (meses)</label>
            </div>

        </div>
    )
}
