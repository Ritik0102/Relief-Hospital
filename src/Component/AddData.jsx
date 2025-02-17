import React, { useState } from 'react';
import './AddData.css'; // Assuming you have a CSS file for additional styling

export default function AddData() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "", branch: "", comname: "", docstat: "", doa: "", dod: "", handover: "", scan: "", corpack: "", cordate: "", claimno: "", amount: "", status: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.branch && form.comname && form.docstat && form.doa && form.dod && form.handover && form.scan && form.corpack && form.cordate && form.claimno && form.amount && form.status) {
      setData([...data, form]);
      setForm({
        name: "", branch: "", comname: "", docstat: "", doa: "", dod: "", handover: "", scan: "", corpack: "", cordate: "", claimno: "", amount: "", status: ""
      });
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-whatever="@getbootstrap">+</button>

      <div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Customer Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-start">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Name of Patient</label>
                  <input name='name' value={form.name} onChange={handleChange} type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="recipient-branch" className="col-form-label">Branch</label>
                    <input name='branch' value={form.branch} onChange={handleChange} type="text" className="form-control" id="recipient-branch" />
                  </div>
                  <div className="col">
                    <label htmlFor="recipient-comname" className="col-form-label">Company Name</label>
                    <input name='comname' value={form.comname} onChange={handleChange} type="text" className="form-control" id="recipient-comname" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="recipient-docstat" className="col-form-label">Document</label>
                    <input name='docstat' value={form.docstat} onChange={handleChange} type="text" className="form-control" id="recipient-docstat" />
                  </div>
                  <div className="col">
                    <label htmlFor="recipient-doa" className="col-form-label">Date of Admission</label>
                    <input name='doa' value={form.doa} onChange={handleChange} type="date" className="form-control" id="recipient-doa" />
                  </div>
                  <div className="col">
                    <label htmlFor="recipient-dod" className="col-form-label">Date of Discharge</label>
                    <input name='dod' value={form.dod} onChange={handleChange} type="date" className="form-control" id="recipient-dod" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="recipient-handover" className="col-form-label">File Handover To</label>
                    <input name='handover' value={form.handover} onChange={handleChange} type="text" className="form-control" id="recipient-handover" />
                  </div>
                  <div className="col">
                    <label htmlFor="recipient-scan" className="col-form-label">Scanning</label>
                    <input name='scan' value={form.scan} onChange={handleChange} type="text" className="form-control" id="recipient-scan" />
                  </div>
                  <div className="col">
                    <label htmlFor="recipient-corpack" className="col-form-label">Courier Package</label>
                    <input name='corpack' value={form.corpack} onChange={handleChange} type="text" className="form-control" id="recipient-corpack" />
                  </div>
                  <div className="col">
                    <label htmlFor="recipient-cordate" className="col-form-label">Courier Date</label>
                    <input name='cordate' value={form.cordate} onChange={handleChange} type="date" className="form-control" id="recipient-cordate" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="recipient-claimno" className="col-form-label">Claim Number</label>
                    <input name='claimno' value={form.claimno} onChange={handleChange} type="text" className="form-control" id="recipient-claimno" />
                  </div>
                  <div className="col">
                    <label htmlFor="recipient-amount" className="col-form-label">Amount</label>
                    <input name='amount' value={form.amount} onChange={handleChange} type="number" className="form-control" id="recipient-amount" />
                  </div>
                  <div className="col">
                    <label htmlFor="recipient-status" className="col-form-label">Status</label>
                    <input name='status' value={form.status} onChange={handleChange} type="text" className="form-control" id="recipient-status" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}