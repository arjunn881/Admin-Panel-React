import React from 'react'
import style from './footer.module.css'

export default function Footer() {
  return (
    <div>
        <footer className={style.footer}>
            Copyright &copy; 2018 All rights reserved. Design: Template Mo (<a href='/' target='_blank' rel='noreferrer'>Arjuna Nayak</a>)
        </footer>
    </div>
  )
}
