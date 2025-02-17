import React from 'react'


export default function Dashboard() {
  return (
    
    <div>
      <div className="container mt-5 pt-5 position-absolute top-0 start-0 text-end">
  <div className="row gx-5">
    <div className="col">
     <div className="rounded p-4 bg-primary">
      <h6>Total Amount</h6>
      <h2>50000</h2>
     </div>
    </div>
    <div className="col">
      <div className="p-4 rounded bg-primary">
      <h6>Total Paid</h6>
      <h2>50000</h2>
        </div>  
    </div>
    <div className="col">
      <div className="p-4 rounded bg-primary">
      <h6>Total Due</h6>
      <h2>50000</h2>
      </div>  
    </div>
  </div>
</div>
    </div>
   
    
  )
}
