
const initialstate = {
  User: false,
  Admin: false,
  ProfileDetailes: []
};

const Register_Login_Logout_Profile_Update_Profile = (state = initialstate, action) => {
    switch (action.type) {
        case "USERREGISTER":
            return {...state, User:true, ProfileDetailes: action.payload};
        case "USERLOGIN":
            return {...state, User:true, ProfileDetailes: action.payload};
        case "ADMINREGISTER":
            return {...state, Admin:true, ProfileDetailes: action.payload};
        case "ADMINLOGIN":
            return {...state, Admin:true, ProfileDetailes: action.payload};
        case "LOGOUT":
            return {...state, User:false, Admin: false, ProfileDetailes: []};
        case "UPDATEPROFILE":
            return {...state, ProfileDetailes: action.payload};
        default:
            return state;
    }
}

export { Register_Login_Logout_Profile_Update_Profile };