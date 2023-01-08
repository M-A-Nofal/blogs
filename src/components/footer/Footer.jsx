import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

function Footer() {
  return (
    <>
      <footer className='boxItems mt-3' bg="info" variant="info">
        <div className=' d-flex justify-content-between container'>
          <p>News App - All right reserved - Design & Developed by Mohamed Nofal</p>
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;