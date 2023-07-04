
import { authSlice } from "./slices/AuthSlice";
import {configureStore} from '@reduxjs/toolkit'
import { meetingsSlice } from "./slices/MeetingSlice";
export const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        meetings:meetingsSlice.reducer
    },

    
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
