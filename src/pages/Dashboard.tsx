import React from 'react'
import UseAuth from '../hooks/UseAuth'
import { useNavigate } from 'react-router-dom';
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiImage } from '@elastic/eui';
import Header from '../components/Header';
function Dashboard() {
  UseAuth();
  const navigate=useNavigate();
  return (
    <>
    <div style={{
      display: "flex",
      height:"100vh",
      flexDirection:"column",
    }}>
      <Header/>
      <EuiFlexGroup justifyContent='center' alignItems='center' style={{margin:"5vh 10vh"}}>
      <EuiFlexItem>
          
          <EuiCard
          icon={<EuiImage size="7rem" alt="icon" src="https://cdn3.vectorstock.com/i/1000x1000/06/72/timer-event-delivery-date-schedule-icon-vector-29220672.jpg"/>}
          title={'Create Meeting'}
          description="Create a new meeting and invite people"
          onClick={()=>navigate('/create')}
          paddingSize='xl'

          />
        </EuiFlexItem>
        <EuiFlexItem>
          
          <EuiCard
          icon={<EuiImage size="50%" alt="icon" src="https://assets.asana.biz/transform/6ea86106-8b2b-4fe7-8094-1cce17dc4e15/article-project-management-meeting-agenda-2x"/>}
          title={'My Meetings'}
          description="View your created meetings"
          onClick={()=>navigate('/mymeetings')}
          paddingSize='xl'

          />
        </EuiFlexItem>
        <EuiFlexItem>

          <EuiCard
          icon={<EuiImage size="7rem" alt="icon" src="https://cdn.pixabay.com/photo/2020/09/20/16/18/video-conference-5587603_640.png"/>}
          title={'Meeting'}
          description="View the meetings that you are invited to."
          onClick={()=>navigate('/meetings')}
          paddingSize='xl'

          />
        </EuiFlexItem>
      </EuiFlexGroup>

    </div>
    </>
  )
}

export default Dashboard