import { combineReducers } from "redux";
import { Register_Login_Logout_Profile_Update_Profile } from "./Register_Login_Logout_Profile_Update_Profile";
import {
    All_Blogs_Details, Featured_Blogs_Details, Recent_Blogs_Details, Populer_Blogs_Details,
    Category_Blogs_Details
} from "./Fech_Api";

const rootReducer = combineReducers({
    User_Admin_Profile: Register_Login_Logout_Profile_Update_Profile,
    All_Blogs_Details,
    Featured_Blogs_Details,
    Recent_Blogs_Details,
    Populer_Blogs_Details,
    Category_Blogs_Details
})

export default rootReducer;