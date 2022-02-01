import { combineReducers } from "redux";
import { Register_Login_Logout_Profile_Update_Profile } from "./Register_Login_Logout_Profile_Update_Profile";

const rootReducer = combineReducers({
    User_Admin_Profile: Register_Login_Logout_Profile_Update_Profile
})

export default rootReducer;