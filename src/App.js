import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

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

  const handleChangeData = (newValue, newInterest, newPeriod) => {
    if (newValue !== null) {
      setInitialValue(newValue);
      return;
    }
    if (newInterest !== null) {
      setMonthlyInterest(newInterest);
      return;
    }
    if (newPeriod !== null) {
      setMonthlyPeriod(newPeriod);
      return;
    }
  }

  return (
    <div className='container'>
      <h1 className='center'>React juros compostos</h1>
      <Form data={{ initialValue, monthlyInterest, monthlyPeriod }} onChangeData={handleChangeData} />
      <Installments data={installments}/>
    </div>
  );
}
