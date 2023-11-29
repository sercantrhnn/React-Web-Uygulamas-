import React from 'react'
import bannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${bannerImage})`}}></div>
        <div className='aboutBottom'>
            <h1>Hakkımızda</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dicta sequi id libero facere iure ipsa alias minus accusamus vero commodi atque, qui error! Non repudiandae debitis sunt voluptates fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus cumque quisquam assumenda inventore! Ipsa quos quibusdam rem minus maxime odio at ullam, autem eveniet, impedit laboriosam earum quas inventore.</p>
        </div>

        

    </div>
  )
}

export default About