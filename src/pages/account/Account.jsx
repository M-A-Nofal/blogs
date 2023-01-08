import React from 'react'
import { Container } from 'react-bootstrap'
import image from "../../assets/images/input.png";
import './account.css'


function Account() {
  return (
    <section className='accountInfo'>
      <Container>
        <h1>Account Information</h1>
        <div className='content'>
          <div className='left'>
            <div className='img flexCenter'>
                <input type='file' accept='image/*' src={image} alt='img' />
                <img src={image} alt='img' class='image-preview'/>
            </div>
          </div>
          <div className='right'>
            <label htmlFor=''>Username</label>
              <input type='text' />
              <label htmlFor=''>Email</label>
              <input type='email' />
              <label htmlFor=''>Password</label>
              <input type='password' />
              <button className='button'>Update</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Account