
import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import GithubProfile from './GithubProfile'
import Login from './Login'
import Timer from './Timer'
export default function App() {
  return (
    <div>
    <div  className="flex justify-around bg-black h-[50px] text-2xl items-center text-white">
    
    <Link to="/github">GitHub Profile</Link>
    <Link to="/Timer">Timer</Link>
 <Link to="/">Login with Gooogle</Link>
    </div>
    <Routes>

<Route path="/" element={ <Login/>}/> 
<Route path="/github" element={ <GithubProfile/>}/>
<Route path="/Timer" element={ <Timer/>}/> 

</Routes>
   </div>
  )
}
