import React from 'react'
import { useState } from 'react'

export default function AddData() {
const [data, setData] = useState([])
const [form, setForm] = useState({name:"", branch:"", comname:"", docstat:"", doa:"", dod:"", handover:"", scan:"", corpack:"", cordate:"", claimno:"", amount:"", status:""})

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
};

const handleSubmit = (e) =>{
    e.preventDefault();
    if(form.name && form.branch && form.comname && form.docstat && form.doa && form.dod && form.handover && form.scan && form.corpack && form.cordate && form.claimno && form.amount && form.status) {
        setData([...data, form]);
        setForm({name:"", branch:"", comname:"", docstat:"", doa:"", dod:"", handover:"", scan:"", corpack:"", cordate:"", claimno:"", amount:"", status:""})
    }
}
  return (
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
            <input name='doa' value={form.doa} onChange={handleChange} type="text" className="form-control " id="recipient-name"/>
            </div>
            <div className='w-100 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Date of Discharge</label>
            <input name='dod' value={form.dod} onChange={handleChange} type="text" className="form-control " id="recipient-name"/>
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
            <input name='cordate' value={form.cordate} onChange={handleChange} type="text" className="form-control " id="recipient-name"/>
            </div>
          </div>
          <div className="form-group d-flex justify-content-between">
            <div className='w-100'>
            <label htmlFor="recipient-name" className="col-form-label">Claim Number</label>
            <input name='claimno' value={form.claimno} onChange={handleChange} type="text" className="form-control" id="recipient-name"/>
            </div>
            <div className='w-10 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Amount</label>
            <input name='amount' value={form.amount} onChange={handleChange} type="text" className="form-control " id="recipient-name"/>
            </div>
            <div className='w-10 ml-2'>
            <label htmlFor="recipient-name" className="col-form-label">Amount</label>
            <input name='status' value={form.status} onChange={handleChange} type="text" className="form-control " id="recipient-name"/>
            </div>
          </div>
          
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
