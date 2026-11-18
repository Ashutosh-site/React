import React from 'react'

const Navbar = (props) => {

function ChangeTheme() {
    props.setTheme("dark")
}
  return (
    <div>
        <button onClick={ChangeTheme}>Change the theme</button>
        </div>
  )
}

export default Navbar