import React from 'react'
import bannerImage from '../assets/banner.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${bannerImage})`}}>

      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type="text" name="name" placeholder='Lütfen Ad soyad giriniz' />
          <input type="email" name="email" placeholder='Lütfen email giriniz' />
          <textarea rows="6" name="mesaj" placeholder='Lütfen mesaj giriniz' />
        </form>
      </div>

    </div>
  )
}

export default Contact