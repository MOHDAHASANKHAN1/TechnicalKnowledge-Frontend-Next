import {useState} from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { Update_Profile_Detailes } from "../Redux/Action/Register_Login_Logout_Profile_Update_Profile";

export default function Profile(){

  const userinfo = useSelector((state) => state.User_Admin_Profile.ProfileDetailes);
  const User = useSelector((state) => state.User_Admin_Profile.User);
  const Admin = useSelector((state) => state.User_Admin_Profile.Admin);
  const dispatch = useDispatch();
  
    //start user userinfo variabel
const [firstname, setFirstname] = useState(userinfo.firstname);
const [lastname, setLastname] = useState(userinfo.lastname);
const [email, setEmail] = useState(userinfo.email);
const [mobilenumber, setMobilenumber] = useState(userinfo.mobilenumber);
const [password, setPassword] = useState(userinfo.password);
const [cpassword] = useState(userinfo.cpassword);
const [upid] = useState(userinfo._id);
//end user userinfo variabel

function Updateuser(e){
  e.preventDefault(false);
  const qdata = {_id: upid, firstname: firstname, lastname: lastname, email: email, mobilenumber: mobilenumber, password: password, cpassword: cpassword};
 dispatch(Update_Profile_Detailes(qdata))
}
  
  if (User || Admin) {
    return(
      <>
      <div class="container-fluid py-3">
      <div class="container-fluid rounded log ">
    <div class="row">
        <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=""/><span class="font-weight-bold">{firstname + " " + lastname}</span><span class="text-black-50">{email}</span><span> </span></div>
        </div>
        <div class="col-md-8 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><h6 class="h6s">Name</h6><input type="text" class="form-control" placeholder="first name" value={firstname} 
                    onChange={(e) => setFirstname(e.target.value)}
                    /></div>
                    <div class="col-md-6"><h6 class="h6s">Surname</h6><input type="text" class="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="surname"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><h6 class="h6s">Mobile Number</h6><input type="text" class="form-control" placeholder="enter phone number" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} /></div>
                    <div class="col-md-12"><h6 class="h6s">Email ID</h6><input type="text" class="form-control" placeholder="enter email id" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><h6 class="h6s">Password</h6><input type="text" class="form-control" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><h6 class="h6s">Country</h6><input type="text" class="form-control" placeholder="country" value="India"/></div>
                    <div class="col-md-6"><h6 class="h6s">State/Region</h6><input type="text" class="form-control" value="UtterPradesh" placeholder="state"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button"  onClick={(e) => Updateuser(e)}>Update Profile</button></div>
            </div>
        </div>
            </div>
</div>
      </div>
      </>
      );
  }else{
    return(
    <>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">You Have Not Logged In</h1>
    </>
    );
  }

}
