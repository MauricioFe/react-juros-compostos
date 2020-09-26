import React from 'react'

export default function Installments({ data }) {
    return (
        <div className='row'>
            {data.map(item => {
                const { id } = item;
                return <Instalment key={id} data={item} />
            })}
        </div>
    )
}
