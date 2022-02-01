import axios from 'axios';

export const Register = (data) => async (dispatch) => {
  axios
    .post('https://technicalknowledge-backends.herokuapp.com/Register', data)
    .then( (res) => {
      if (res.data.message === "Successfully Registeruser") {
          alert('You Have SuccessFully Registered');
          dispatch({
            type: "USERREGISTER",
            payload: res.data.user
          });
          window.location.reload(false);
      }else if (res.data.message === "This User Is Already Exist") {
        alert("This User " + res.data.user + " Is Already Exist")
      }else if (res.data.message === "Successfully Registeradmin") {
        dispatch({
            type: "ADMINREGISTER",
            payload: res.data.user  
        });
          alert('You Have SuccessFully Registered');
          window.location.reload(false);
      }
      });
      
}

export const Login = (data) => async (dispatch) => {
  axios
    .post('https://technicalknowledge-backends.herokuapp.com/Login', data)
    .then( (res) => {
        if (res.data.message === "Login Successfull Adminuser") {
        dispatch({
            type: "ADMINLOGIN",
            payload: res.data.user  
        });
        alert("Login Successfull");
        window.location.reload(false);
        }else if (res.data.message === "Login Successfull Studentuser"){
          dispatch({
            type: "USERLOGIN",
            payload: res.data.user
          });
          alert("Login Successfull");
          window.location.reload(false);
        }else if (res.data.message === "Password Is Invalid") {
          alert(res.data.message);
        }else if (res.data.message === "This User Is Not Registered") {
          alert("This User " + res.data.user + " Is Not Registered");
        }
      });
      
}

export const Logout = () => {
    return{
        type: "LOGOUT"
    }
}

export const Update_Profile_Detailes = (data) => async (dispatch) => {
  if (window.confirm("Do You Really Want To Update This User")) {
  axios.post('https://technicalknowledge-backends.herokuapp.com/Blogsusers/Update', data)
     .then((res) =>{
       dispatch({
            type: "UPDATEPROFILE",
            payload: res.data.user
          });
       alert(res.data.message);
})
}
      
}