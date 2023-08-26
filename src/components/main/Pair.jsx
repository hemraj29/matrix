import React from 'react'
import Card from '../../assests/Card'
import useFetchData from '../../api/fetchData/fetchData.hook'

function Pair() {
  const {data} = useFetchData();
  const data1 = data?.slice(0,10)
  return (
   <>
    <div className='token-heading'>Pair Search Results</div>
      <div className='grid-container'>
      {
        data1?.map((item,index)=>{
          return(
            <>
              <Card key={index} item={item}/>
            </>
          )
        })
      }
    </div>
   </>
  )
}

export default Pair