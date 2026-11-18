import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.Header}>
      <h3>
        Ashutosh
      </h3>
      <button className={style.btn}>login</button>
    </div>
  )
}

export default Header