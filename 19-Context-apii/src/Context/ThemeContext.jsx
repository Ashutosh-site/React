import React, { createContext } from 'react'

 export const PostDataContext = createContext()




const ThemeContext = (props) => {
  return (
    <div>
    <PostDataContext.Provider value="sarthak">
        {props.children}
    </PostDataContext.Provider>



    </div>
  )
}

export default ThemeContext