import axios from 'axios';
import { useSelector } from "react-redux";

export default function Studentinfo(props){
  const data = props.data;
  const Admin = useSelector((state) => state.User_Admin_Profile.Admin);
  
function Delete(id){
  const qdata = {_id: id}
  if (window.confirm("Do You Really Want To Delete This User")) {
  axios.post('https://technicalknowledge-backends.herokuapp.com/Newslater/Delete', qdata)
     .then(res => alert(res.data))
  }
}

    if (data) {
      if (Admin) {
      return(
        <>
        
      <div class="container-fluid pt-2 all-available">
      <div class="row g-0">
        <div class="col-sm-12 d-flex justify-content-center r-log-b-h1 p-3 bg-secondary">
          <h2 class="text-white"><b>NewsLater Subscription</b></h2>
        </div>
      </div>
    </div>
        
        <div class="container-fluid overflow-auto pt-2">
        <table class="table table-primary">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map( ( data) =>
      <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>
        <div>
        <button class="btn-danger"  onClick={() => Delete(data._id)}><i class="fas fa-trash-alt"></i></button>
        </div>
        </td>
      </tr>
      )
    }
  </tbody>
</table>
</div>
        </>
      );
    } else {
      return(
        <>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
        </>
        );
    }
    } else {
      return(
        <>
      <h1 class="text-warning text-center mt-2">Loading...</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Loading...</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Loading...</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Loading...</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Loading...</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Loading...</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Loading...</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Loading...</h1>
        </>
        );
    }
}
