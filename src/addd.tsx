import React, { useState } from 'react'  
import axios from 'axios';  
function Regster(props:any) {  
  const [data, setdata] = useState({ Name: '', Price: '' })  
  const apiUrl = "https://localhost:44377/api/Car";  
  const Registration = (e:any) => {  
    e.preventDefault();  
    debugger;  
    const data1 = {Name: data.Name, Price: Number(data.Price)};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          alert("inserted")  
      })  
  }  
  const onChange = (e:any) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div className="container">  
      <div className="row">  
        <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
          Add New Contact  
       </div>  
      </div>  
      <div className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div className="card-body p-0">  
          <div className="row">  
            <div className="col-lg-12">  
              <div className="p-5">  
                <div className="text-center">  
                  <h1 className="h4 text-gray-900 mb-4">Create a New User</h1>  
                </div>  
                <form onSubmit={Registration} className="user">  
                  <div className="form-group row">  
                    <div className="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Name" onChange={onChange} value={data.Name} className="form-control" id="exampleFirstName" placeholder="Name" />  
                    </div>  
                    <div className="col-sm-6">  
                      <input type="text" name="Price" onChange={onChange} value={data.Price} className="form-control" id="exampleLastName" placeholder="Price" />  
                    </div>  
                  </div>  
                  <button type="submit" className="btn btn-primary  btn-block">  
                    Add car 
                </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Regster