import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaRegSnowflake } from "react-icons/fa";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { AuthContext } from '../context/AuthContext';

function Login() {
  
  const navigate = useNavigate()

    const {user, setUser, setSigned } = useContext(AuthContext)

    const handleSubmit = (e) => {
      e.preventDefault();
      if (user.email && user.password) {
          setSigned(true)
          navigate("/home")             
      } else {
          setSigned(false)
          
      }
  }

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='d-flex justify-content-around align-items-center'>

          <MDBCol md='4' >
            <MDBCardImage src='https://images.ctfassets.net/hrltx12pl8hq/6TIZLa1AKeBel0yVO7ReIn/1fc0e2fd9fcc6d66b3cc733aa2547e11/weather-images.jpg?fit=fill&w=600&h=1200' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='4' >
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0"><FaRegSnowflake />
</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' value={user?.email} onChange={(e) => setUser({...user, email: e.target.value})} type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' value={user?.password} onChange={(e) => setUser({...user, password: e.target.value})} type='password' size="lg"/>

              <MDBBtn onClick={handleSubmit} className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
 

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;