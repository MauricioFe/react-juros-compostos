import React, { useState, useEffect } from 'react';
import Form from './components/Form';

export default function App() {
  const [initialValue, setInitialValue] = useState(1000);
  const [monthlyInterest, setMonthlyInterest] = useState(1);
  const [monthlyPeriod, setMonthlyPeriod] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    calculateInterest(initialValue, monthlyInterest, monthlyPeriod);
  }, [initialValue, monthlyInterest, monthlyPeriod])

  /**
   * let juros =0;
    for (let i = 1; i <= monthlyPeriod; i++){
     juros = (initialValue * (monthlyInterest / 100 +1) ** i).toFixed(2);
     console.log(juros)
    }
   * 
   */

  const calculateInterest = (initialValue, monthlyInterest, monthlyPeriod) => {
    const newInstallments = [];
    let currentId = 1;
    let currentValue = initialValue;
    let percentage = 0;
    for (let i = 1; i <= monthlyPeriod; i++) {
      const percentValue = (currentValue * monthlyInterest) / 100;
      currentValue = monthlyInterest >= 0 ? currentValue + percentValue : currentValue - percentValue;
      percentage = (currentValue / initialValue - 1) * 100;
      newInstallments.push({
        id: currentId++,
        value: currentValue,
        difference: currentValue - initialValue,
        percentage,
        profit: monthlyInterest > 0,
      })
    }
    setInstallments(newInstallments);
  }
  const handlePeriodChange = (period) => {
    setMonthlyPeriod(period);
  }
  const handleCapitalChange = (capital) => {
    setInitialValue(capital);
  }
  const handleTaxChange = (tax) => {
    setMonthlyInterest(tax);
  }

  return (
    <div className='container'>
      <h1 className='center'>React juros compostos</h1>
      <Form onChangePeriod={handlePeriodChange} onChangeCapital={handleCapitalChange} onChangeTax={handleTaxChange} />
    </div>
  );
}
