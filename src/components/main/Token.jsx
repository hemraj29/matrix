import React from 'react'
import "./home.css"
import Card from '../../assests/Card'
import useFetchData from '../../api/fetchData/fetchData.hook'

function Token() {
  const {data} = useFetchData();
  console.log(data);
  return (
   <>
    <div className='token-heading'>Token Search Results</div>
     <div className='grid-container'>
        {
          data?.map((item,index)=>{
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

export default Token