import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

function Footer() {
  return (
    <>
      <footer className='boxItems mt-3 pt-3' style={{ background: '#0dcaf0' }}>
        <div className=' d-flex justify-content-between container'>
          <p>Design & Developed by Mohamed Nofal</p>
          <div className='social'>
            <BsFacebook className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;