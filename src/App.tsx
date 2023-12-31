import React, { useEffect, useState } from 'react';
import {EuiGlobalToastList, EuiProvider, EuiThemeColorMode, EuiThemeProvider} from '@elastic/eui';


import Login from './pages/Login';
import {Route,Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { useAppDispatch, useAppSelector } from './app/hooks';
import ThemeSelector from './components/ThemeSelector';
import CreateMeeting from './pages/CreateMeeting';
import OneOnOnemeetings from './pages/OneOnOnemeetings';
import { setToasts } from './app/slices/MeetingSlice';
import VideoConference from './pages/VideoConference';
import MyMeeting from './pages/MyMeeting';
import Meeting from './pages/Meeting';
import JoinMeeting from './pages/JoinMeeting';
function App() {
  const dispatch=useAppDispatch();
  const toasts=useAppSelector((zoom)=>zoom.meetings.toasts);
  const isDarkTheme=useAppSelector((zoom)=>zoom.auth.isDarkTheme);
  const [theme,setTheme]=useState<EuiThemeColorMode>("light");
  const[isInitialTheme,setIsInitialTheme]=useState(true);
  useEffect(()=>{
    const theme=localStorage.getItem("zoom-theme");
    if(theme){
      setTheme(theme as EuiThemeColorMode)
    }
    else{
      localStorage.setItem("zoom-theme","light");
    }
  },[]);

  useEffect(()=>{
    if(isInitialTheme) setIsInitialTheme(false);
    else{
      window.location.reload()
    }
  },[isDarkTheme])
  const overrides={
    colors:{
      LIGTH:{
        primary:"#0b5cff"
            },
      DARK:{primary:"#0b5cff"}
    }
  };

  const removeToast=(removeToast:{id:string})=>{
    dispatch(
      setToasts(
        toasts.filter((toasts:{id:string})=>toasts.id!==removeToast.id)
      )
    );
  };
  return (
    <ThemeSelector>
    <EuiProvider colorMode={theme}>
      <EuiThemeProvider modify={overrides}>
      <Routes >
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateMeeting/>}/>
        
        <Route path="/create1on1" element={<OneOnOnemeetings/>}/>

        <Route path="/video" element={<VideoConference/>}/>
        
        <Route path="/mymeetings" element={<MyMeeting/>}/>
        
        <Route path="/join/:id" element={<JoinMeeting/>}/>
        
        <Route path="/meetings" element={<Meeting/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="*" element={<Dashboard/>}/>

      </Routes>
      <EuiGlobalToastList 
      toasts={toasts}
      dismissToast={removeToast}
      toastLifeTimeMs={5000}
      />
      </EuiThemeProvider>
     
    </EuiProvider>
    </ThemeSelector>
    
  )
}

export default App;