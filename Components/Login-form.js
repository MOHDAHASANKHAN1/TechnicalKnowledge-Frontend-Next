import { useForm } from "react-hook-form";
import classNames from 'classnames';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { Login } from "../Redux/Action/Register_Login_Logout_Profile_Update_Profile";

function Login_form(){
  const dispatch = useDispatch();

  const { handleSubmit, register, formState: { errors } } = useForm();

function Submit(data){
  dispatch(Login(data))
  };
  
  return(
      <>
      <div className="modal fade" id="exampleModal2" >
  <div className="modal-dialog m-dlg modal-dialog-centered">
    <div className="modal-content bg-info">
      <div className="modal-header">
        <h3 className="modal-title" id="exampleModalLabel">Login Here</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form  onSubmit={handleSubmit(Submit)} method="post">
        <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label h2">Email address</label>
    <input type="email" className={classNames("form-control ", {"is-invalid": errors.email}
    )} id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off" 
    placeholder="Please Enter Your Email Id"
    {...register("email", {
          required: "Your Email Address Is Required Please Enter Email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please Enter Valid Email Address"
          }
        })}
    />
   <div id="emailHelp" className="form-text text-danger"><h5> {errors.email && errors.email.message}</h5></div>
  </div>
   <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label h2">Password</label>
    <input type="password" className={classNames("form-control ", {"is-invalid": errors.Password1}
    )} id="exampleInputPassword1" autocomplete="off"
    placeholder="Please Enter Your Password"
      {...register("password", {
          required: "Your Password Is Required Please Enter Password",
          minLength: {
            value: 8,
            message: "Remember Your Password For Future Login"
          }
        })}
     />
    <div id="password1Help" className="form-text text-danger"><h5>{errors.password && errors.password.message}</h5></div>
  </div>
  <div className="d-grid m-3">
  <button className="btn btn-primary " type="submit"><p className="h1">Login</p></button>
</div>

</form>
      </div>
      </div>
    </div>
</div>
</>
    );
}
export default Login_form;
