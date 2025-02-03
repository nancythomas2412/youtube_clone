import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import './Home.css'

const home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "":'large-container'}`}>
        <Feed/>
      </div>
    </>
  )
}

export default home