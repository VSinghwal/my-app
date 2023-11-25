import React from 'react'
import Homesec1 from './Homesec1'
import Homesec2 from './Homesec2'
import "./Homesec1.css"
import Homesec3 from './Homesec3'
import Homesec4 from './Homesec4'
import Homesec5 from './Homesec5'

const Home = () => {
  return (
    <div>
      <div className='back'>
       <Homesec1/> 
       <Homesec2/>
       <Homesec3/>
       <Homesec4/>
       <Homesec5/>
    </div>
    </div>
  )
}

export default Home