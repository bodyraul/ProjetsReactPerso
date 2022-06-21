import React from 'react'

export default function Barredeux({index}) {
    console.log(index);
  return (
    <>
        <div style={{
            width:index===3?"30%":
                  index===4?"55%":  
                  index===5?"77%": 
                  index===6?"100%": 
                  ""
        }} className='barredeux'></div>
    </>
  )
}
