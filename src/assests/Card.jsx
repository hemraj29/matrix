import React from 'react'

function Card({item}) {
  return (
   <>
    <div className='card-wrapper'>
        <p className='card-title'>{item?.baseToken?.name}</p>
        <div className='card-grid'>
        {/* first row */}
            <div className='card-item-odd'>Pair created at</div>
            <div className='card-item-even'>{item?.pairCreatedAt}</div>
            {/* second row */}
            <div className='card-item-odd'>Symbol</div>
            <div className='card-item-even'>{item?.quoteToken?.symbol}</div>
            {/* third row */}
            <div className='card-item-odd'>Dex ID</div>
            <div className='card-item-even'>{item?.dexId.slice(0,10)}</div>
            {/* fourth row */}
            <div className='card-item-odd'>Pair Address</div>
            <div className='card-item-even'>{item?.pairAddress.slice(0,10)}</div>
        </div>
        <div className='card-circle'>
            <img 
            src='/images/material-symbols_token-outline.svg'
            className='card-image'
            alt='as'
            />
        </div>
    </div>
   </>
  )
}

export default Card