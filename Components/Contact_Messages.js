import {useState} from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';

export default function Studentinfo(props){
  const data = props.data;
  const Admin = useSelector((state) => state.User_Admin_Profile.Admin);
  const history = useRouter();
  
function Delete(id){
  const qdata = {_id: id}
  if (window.confirm("Do You Really Want To Delete This User")) {
  axios.post('https://technicalknowledge-backends.herokuapp.com/Contactus/Delete', qdata)
     .then(res => alert(res.data))
  }
}

const [search, setSearch] = useState('');
  function Search(){
    if (search === '') {
      alert("Please Enter A Blog Id");
    } else {
      history.push(`/Searchblogid/${search}`);
    }
  }
    if (data) {
      if (Admin) {
      return(
        <>
        
      <div class="container-fluid pt-2 all-available">
        <div class="bg-light my-1 d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search"
                                        aria-label="Search" value={search} 
                    onChange={((e) => {
                      setSearch(e.target.value);
                    })}
                      /><i class="fas fa-search p-2" onClick={() => Search()}></i>
          </div>
      
      <div class="row g-0">
        <div class=" col-sm-12 d-flex justify-content-center r-log-b-h1 p-3 bg-secondary">
          <h2 class="text-white"><b>Messages From User</b></h2>
        </div>
      </div>
    </div>
        
        <div class="container-fluid overflow-auto pt-2">
        <table class="table table-primary">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Id</th>
      <th>Message</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map( ( data) =>
      <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.postid}</td>
        <td>{data.message}</td>
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
