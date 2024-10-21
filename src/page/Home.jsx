import React from 'react'
import { useDispatch } from 'react-redux'
import {login} from "../features/User"

const Home = () => {
const dispatch=useDispatch()

console.log(login)

  return (
    <div>
      hi home 


<button onClick={()=>dispatch(login({
    name:"hari",
    email:"hari@gmail.com",
}))}> send data </button>


    </div>
  )
}

export default Home
