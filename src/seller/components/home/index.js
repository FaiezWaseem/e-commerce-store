import React from 'react'
import Card from './Card'
export default function Index() {
  return (
    <div  className='container'>
        <div  className='row'>
            < Card  item={{
                title : "Total Orders",
                value : 20,
                per : "3%"
            }} />
            < Card  item={{
                title : "Total Pending",
                value : 2,
                per : "1%"
            }} />
            < Card  item={{
                title : "Canceled Order",
                value : 0,
                per : "0%"
            }} />
            < Card  item={{
                title : "Total Products",
                value : 9,
                per : "nill"
            }} />
            < Card  item={{
                title : "Monthly Sales",
                value : "20000/=",
                per : "12%"
            }} />
            < Card  item={{
                title : "OverAll Sales",
                value : "354000/=",
                per : "7%"
            }} />

        </div>
    </div>
  )
}
