import React, { useState, useEffect } from 'react';
import Form from './components/Form';

export default function App() {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [taxaMensal, setTaxaMensal] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [bacon, setBacon] = useState([]);

  useEffect(() => {
    let juros =0;
    for (let i = 1; i <= periodo; i++){
     juros = (capitalInicial * (taxaMensal / 100 +1) ** i).toFixed(2);
     console.log(juros)
    }
   
  }, [capitalInicial, taxaMensal, periodo])

  const handlePeriodChange = (period) => {
    setPeriodo(period);
  }
  const handleCapitalChange = (capital) => {
    setCapitalInicial(capital);
  }
  const handleTaxChange = (tax) => {
    setTaxaMensal(tax);
  }

  return (
    <div className='container'>
      <h1 className='center'>React juros compostos</h1>
      <Form onChangePeriod={handlePeriodChange} onChangeCapital={handleCapitalChange} onChangeTax={handleTaxChange} />
    </div>
  );
}
