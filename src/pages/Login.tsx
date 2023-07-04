import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiImage, EuiProvider, EuiSpacer,EuiText, EuiTextColor,EuiPanel } from '@elastic/eui'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { getDocs, where } from 'firebase/firestore'
import { addDoc } from 'firebase/firestore'
import React from 'react'
import { firebaseAuth, userRef } from '../Utils/FirebaseConfig'
import { collection, query } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks'
import { setUser } from '../app/slices/AuthSlice'

function Login() {
    const navigate=useNavigate();
    const dispatch=useAppDispatch();
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/")
    })
    const login=async()=>{
        
        const provider=new GoogleAuthProvider()
        const {user:{displayName,email,uid},}=await signInWithPopup(firebaseAuth,provider);
        if(email){
            const firestoreQuery= query(userRef, where("uid","==",uid));
            const fetchedUsers=await getDocs(firestoreQuery);
            if(fetchedUsers.docs.length===0){
                await addDoc(userRef,{
                    uid,name:displayName,
                    email,
                });
                
            }
        }
        dispatch(setUser({uid,name:displayName,email}));
        navigate("/")
    };
  return (
    <EuiProvider colorMode='dark'>
     <EuiFlexGroup alignItems='center' justifyContent='center' style={{width:"100vw",height:"100vh"}}>
        <EuiFlexItem grow={false}>
            <EuiPanel paddingSize="xl">
              <EuiFlexGroup justifyContent='center' alignItems='center'>
              <EuiFlexItem>
        <EuiImage src="https://josefacchin.com/wp-content/uploads/2020/11/video-chat-que-es-1.png.webp" alt="logo" style={{width:"40vw",height:"40vh"}}/> 
        </EuiFlexItem>
        <EuiFlexItem>
            <EuiImage src="https://img.freepik.com/premium-vector/video-chat-logo-design-icon-vector-silhouette-illustration_685330-2945.jpg?w=2000" alt="logo" size="200px"/>
            <EuiSpacer size='xs'/>
            <EuiText textAlign='center' grow={false}>

                <h3>
                <EuiTextColor>One Platform to </EuiTextColor>
                <EuiTextColor color="#0b5cff">connect</EuiTextColor>
                </h3>            
                </EuiText>
                <EuiSpacer size='xs'/>
                <EuiButton fill onClick={login}>
                    Login With Google 
                </EuiButton>
        </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>

        </EuiFlexItem>
       

     </EuiFlexGroup>
    </EuiProvider>
  )
}

export default Login