import {configureStore} from "@reduxjs/toolkit"
import blogSlice from "./blogSlice";
import userSlice from "./userSlice"
import authSlice from "./authSlice";
import userIdSlice from "./userIdSlice";

const appStore = configureStore(
    {
        reducer  :{
            blogs : blogSlice,
            user : userSlice,
            auth : authSlice,
            userId : userIdSlice,
        }
    }
)


export default appStore;