import React from 'react'
import Header from '../components/Header'
import UseAuth from '../hooks/UseAuth';
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiImage } from '@elastic/eui';
import { useNavigate } from 'react-router-dom';

function CreateMeeting() {
    UseAuth();
    const navigate=useNavigate();
  return (
    <div style={{
        display: "flex",
        height:"100vh",
        flexDirection:"column",}}><Header/>
    <EuiFlexGroup justifyContent='center' alignItems='center' style={{margin:"5vh 10vh"}}>
        <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="20rem" alt="icon" src="https://assets-global.website-files.com/5f55ff47b6d23a11cb496a69/620e598f899e81e9d6ec92e1_Group%2019.png"/>}
              title={'Create 1 on 1 Meeting'}
              description="Create a personal single person meeting."
              onClick={()=>navigate('/create1on1')}
              paddingSize='xl'
    
            />
        </EuiFlexItem>
        <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="25%" alt="icon" src="https://static.vecteezy.com/system/resources/previews/020/897/621/non_2x/video-conference-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"/>}
              title={'Create Video Conference'}
              description="Invite multiple persons to the meeting."
              onClick={()=>navigate('/video')}
              paddingSize='xl'
    
            />
        </EuiFlexItem>
    </EuiFlexGroup>
    </div>
  )
}

export default CreateMeeting