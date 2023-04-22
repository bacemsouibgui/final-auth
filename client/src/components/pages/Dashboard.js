import React from 'react';
import { useSelector } from 'react-redux';
import {Spinner} from 'reactstrap'

function Dashboard() {

  const user= useSelector((state)=>state.authReducer.user)

  if(!user){
    return(

      // Spinner: if there is no user
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>

    )
  }
  // if there is a user
  return (
    <div>
      <h1 className='mb-3 ml-4'> {user.name}</h1>
      <h3 className='mb-3 ml-4'>  {user.lastName}</h3>
      <h5 className='mb-3 ml-4'> {user.email} </h5>


    </div>
  )
}

export default Dashboard;