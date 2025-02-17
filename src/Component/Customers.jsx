import React from 'react'
import { useState } from 'react';

export default function Customers() {
  const [data, setData] = useState([])
  const [form, setForm] = useState({name:"", branch:"", comname:"", docstat:"", doa:"", dod:"", handover:"", scan:"", corpack:"", cordate:"", claimno:"", amount:"", status:""})

  const [editIndex, setEditIndex] = useState(null);
  
  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value});
  };
  
  const handleSubmit = (e) =>{
      e.preventDefault();
      if (
        !form.name ||
        !form.branch ||
        !form.comname ||
        !form.docstat ||
        !form.doa ||
        !form.dod ||
        !form.handover ||
        !form.scan ||
        !form.corpack ||
        !form.cordate ||
        !form.claimno ||
        !form.amount ||
        !form.status
      ) {
        alert("Please fill all fields!");
        return;
      }
  
      if (editIndex !== null) {
        // Update existing record
        const updatedData = [...data];
        updatedData[editIndex] = form;
        setData(updatedData);
        setEditIndex(null);
      } else {
        // Add new record
        setData([...data, form]);
      }
          setForm({name:"", branch:"", comname:"", docstat:"", doa:"", dod:"", handover:"", scan:"", corpack:"", cordate:"", claimno:"", amount:"", status:""})
      }

      const handleEdit = (index) => {
        setForm(data[index]); // Load selected row data into form
        setEditIndex(index); // Set edit index
      };
    
      const handleDelete = (index) => {
        setData(data.filter((_, i) => i !== index)); // Remove selected row
      };
    
  



  return (
    <>
    <div>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name of Patient</th>
      <th scope="col">Branch</th>
      <th scope="col">Company Name </th>
      <th scope="col">Documents Submitted </th>
      <th scope="col">Date of Admission </th>
      <th scope="col">Date of Discharge </th>
      <th scope="col">File Handover To </th>
      <th scope="col">Scanning Process</th>
      <th scope="col">Courier Package </th>
      <th scope="col">Courier Date </th>
      <th scope="col">Claim Number </th>
      <th scope="col">Bill Amount</th>
      <th scope="col">Claim Status </th>
    </tr>
  </thead>
  <tbody>
    {data.length > 0 ? (
      data.map((item, index) => (
        <tr key={index} >
      <th scope="row">1</th>
      <td>{item.name}</td>
      <td>{item.branch}</td>
      <td>{item.comname}</td>
      <td>{item.docstat}</td>
      <td>{item.doa}</td>
      <td>{item.dod}</td>
      <td>{item.handover}</td>
      <td>{item.scan}</td>
      <td>{item.corpack}</td>
      <td>{item.cordate}</td>
      <td>{item.claimno}</td>
      <td>{item.amount}</td>
      <td>{item.status}</td>
      <td>
                  {/* <button
                    className="btn btn-warning btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#customerModal"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button> */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
    </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3} className='p-2 text-center'>No Data Added</td>
      </tr>
    )}
    
  </tbody>
</table>
    </div>
    <div>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">+</button>

<div className="modal fade fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Customer Details</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body text-start">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Name of Patient</label>
            <input name='name' value={form.name} onChange={handleChange} type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="form-group d-flex justify-content-between">
            <div className='w-10'>
            <label htmlFor="recipient-name" className="col-form-label">Branch</label>
            <input name='branch' value={form.branch} onChange={handleChange} type="text" className="form-control" id="recipient-name"/>
            </div>
            <div className='w-100 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Company Name</label>
            <input name='comname' value={form.comname} onChange={handleChange} type="text" className="form-control " id="recipient-name"/>
            </div>
          </div>
          <div className="form-group d-flex justify-content-between">
            <div className='w-100'>
            <label htmlFor="recipient-name" className="col-form-label">Document</label>
            <input  name='docstat' value={form.docstat} onChange={handleChange} type="text" className="form-control" id="recipient-name"/>
            </div>
            <div className='w-100 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Date of Admission</label>
            <input name='doa' value={form.doa} onChange={handleChange} type="date" className="form-control " id="recipient-name"/>
            </div>
            <div className='w-100 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Date of Discharge</label>
            <input name='dod' value={form.dod} onChange={handleChange} type="date" className="form-control " id="recipient-name"/>
            </div>
          </div>
          <div className="form-group d-flex justify-content-between">
            <div className='w-100'>
            <label htmlFor="recipient-name" className="col-form-label">File Handover To</label>
            <input name='handover' value={form.handover} onChange={handleChange} type="text" className="form-control" id="recipient-name"/>
            </div>
            <div className='w-100 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Scanning</label>
            <input name='scan' value={form.scan} onChange={handleChange} type="text" className="form-control " id="recipient-name"/>
            </div>
            <div className='w-100 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Courier Package</label>
            <input name='corpack' value={form.corpack} onChange={handleChange} type="text" className="form-control " id="recipient-name"/>
            </div>
            <div className='w-100 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Courier Date</label>
            <input name='cordate' value={form.cordate} onChange={handleChange} type="date" className="form-control " id="recipient-name"/>
            </div>
          </div>
          <div className="form-group d-flex justify-content-between">
            <div className='w-100'>
            <label htmlFor="recipient-name" className="col-form-label">Claim Number</label>
            <input name='claimno' value={form.claimno} onChange={handleChange} type="text" className="form-control" id="recipient-name"/>
            </div>
            <div className='w-10 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Amount</label>
            <input name='amount' value={form.amount} onChange={handleChange} type="number" className="form-control " id="recipient-name"/>
            </div>
            <div className='w-10 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Status</label>
            <input name='status' value={form.status} onChange={handleChange} type="text" className="form-control " id="recipient-name"/>
            </div>
          </div>
          
        
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">
        {editIndex !== null ? "Update Customer" : "Add Customer"}
        </button>
      </div>
      </form>
      </div>
    </div>
  </div>
</div>
    </div>

    </>

  )
}
