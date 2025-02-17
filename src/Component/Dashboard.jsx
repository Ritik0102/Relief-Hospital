import React from 'react'


export default function Dashboard() {
  return (
    
    <div className="dashboard">
      <div className="container mt-5 pt-5">
        <div className="row gx-5">
          <div className="col">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">
                <h6>Total Amount</h6>
                <h2>50000</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-success text-white mb-4">
              <div className="card-body">
                <h6>Total Paid</h6>
                <h2>30000</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-danger text-white mb-4">
              <div className="card-body">
                <h6>Total Due</h6>
                <h2>20000</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col">
            <div className="card bg-dark text-white mb-4">
              <div className="card-body">
                <h6>New Claims</h6>
                <h2>150</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-black text-white mb-4">
              <div className="card-body">
                <h6>Pending Approvels</h6>
                <h2>75</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">
                <h6>Approved Claims</h6>
                <h2>20</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    
  )
}
