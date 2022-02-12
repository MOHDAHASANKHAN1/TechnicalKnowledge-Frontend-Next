import { useState, useRef } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export default function Studentinfo(props) {
  const Admin = useSelector((state) => state.User_Admin_Profile.Admin);
  const data = props.data;
  const { watch } = useForm();
  const Password = useRef({});
  Password.current = watch("password", "");

  //start user info variabel
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const [upid, setUpid] = useState('');
  //end user info variabel

  function Delete(id) {
    const qdata = { _id: id }
    if (window.confirm("Do You Really Want To Delete This User")) {
      axios.post('https://technicalknowledge-backends.herokuapp.com/Blogsusers/Delete', qdata)
        .then(res => alert(res.data))

    }
  }

  function Updateset(upid, firstname, lastname, email, mobilenumber, password) {
    setFirstname(firstname);
    setLastname(lastname);
    setEmail(email);
    setMobilenumber(mobilenumber);
    setPassword(password);
    setCpassword(password);
    setUpid(upid);
  }

  function Update(e) {
    e.preventDefault();
    const qdata = { _id: upid, firstname: firstname, lastname: lastname, email: email, mobilenumber: mobilenumber, password: password, cpassword: cpassword };
    if (window.confirm("Do You Really Want To Update This User")) {
      axios.post('https://technicalknowledge-backends.herokuapp.com/Blogsusers/Update', qdata)
        .then(res => alert(res.data.message))

    }
  }

  if (data) {
    if (Admin) {
      return (
        <>

          <div className="container-fluid pt-2 all-available">
            <div className="row g-0">
              <div className="col-sm-12 d-flex justify-content-center r-log-b-h1 p-3 bg-secondary">
                <h2 className="text-white"><b>Blog Users Information</b></h2>
              </div>
            </div>
          </div>

          <div className="container-fluid overflow-auto pt-2">
            <table className="table table-primary">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Mobile No.</th>
                  <th>Password</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((data) =>
                    <tr key={1}>
                      <td>{data.firstname}</td>
                      <td>{data.lastname}</td>
                      <td>{data.email}</td>
                      <td>{data.mobilenumber}</td>
                      <td>{data.password}</td>
                      <td>
                        <div>
                          <button className="btn-success" data-bs-toggle="modal" data-bs-target="#updateuser" onClick={() => Updateset(data._id, data.firstname, data.lastname, data.email, data.mobilenumber, data.password)}><i className="fas fa-pen "></i></button>
                        </div>
                      </td>
                      <td>
                        <div>
                          <button className="btn-danger" onClick={() => Delete(data._id)}><i className="fas fa-trash-alt"></i></button>
                        </div>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>

          <div className="modal fade" id="updateuser" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog m-dlg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header bg-info">
                  <h5 className="modal-title" id="exampleModalLabel">Update User Detailes Here</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body bg-info">
                  <div className="container-fluid pb-2">
                    <div className="row g-0">
                      <div className="col-sm-12">
                        <form onSubmit={(e) => Update(e)} method="post" className=" border p-4 bg-light shadow">                    <div className="row g-0">     <div className="col-sm-12 d-flex justify-content-center">
                          <h4 className="mb-3 text-secondary">Update User Detailes</h4>
                        </div>
                        </div>
                          <div className="row">
                            <div className="mb-3 col-sm-6">
                              <label>First Name<span className="text-danger">*</span></label>
                              <input type="text" value={firstname} className="form-control"

                                placeholder="Enter Your FirstName"

                                onChange={((e) => setFirstname(e.target.value))}
                              />
                            </div>

                            <div className="mb-3 col-sm-6">
                              <label>Last Name<span className="text-danger">*</span></label>
                              <input type="text" value={lastname} className="form-control"
                                placeholder="Enter Your LastName"

                                onChange={((e) => setLastname(e.target.value))}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Email Address<span className="text-danger">*</span></label>
                              <input type="email" value={email} className="form-control"
                                placeholder="Enter Your Email Address"

                                onChange={((e) => setEmail(e.target.value))}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Mobile Number<span className="text-danger">*</span></label>
                              <input type="text" value={mobilenumber} className="form-control"
                                placeholder="Enter Your MobileNumber"

                                onChange={((e) => setMobilenumber(e.target.value))}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Password<span className="text-danger">*</span></label>
                              <input type="password" value={password} className="form-control"
                                placeholder="Create Your New Strong Password"

                                onChange={((e) => setPassword(e.target.value))}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Confirm Password<span className="text-danger">*</span></label>
                              <input type="password" value={cpassword} className="form-control"
                                placeholder="Confirm Your Password"

                                onChange={((e) => setCpassword(e.target.value))}
                              />
                            </div>
                            <div className="col-md-12">
                              <div className="row g-0">
                                <div className="col-sm-12  col-12 d-flex justify-content-center">
                                  <button type="submit" className="btn btn-primary">Update User</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h1 className="text-center mt-4 mb-4 text-danger">Nice Try</h1>
          <h1 className="text-center mt-4 mb-4 text-danger">Nice Try</h1>
          <h1 className="text-center mt-4 mb-4 text-danger">Nice Try</h1>
          <h1 className="text-center mt-4 mb-4 text-danger">Nice Try</h1>
          <h1 className="text-center mt-4 mb-4 text-danger">Nice Try</h1>
          <h1 className="text-center mt-4 mb-4 text-danger">Nice Try</h1>
          <h1 className="text-center mt-4 mb-4 text-danger">Nice Try</h1>
          <h1 className="text-center mt-4 mb-4 text-danger">Nice Try</h1>
          <h1 className="text-center mt-4 mb-4 text-danger">Nice Try</h1>
        </>
      );
    }
  } else {
    return (
      <>
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
      </>
    );
  }
}
