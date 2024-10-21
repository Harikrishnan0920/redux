import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'

const Other = () => {
const user=useSelector(state=>state.user.value)
console.log(user)




  return (
    <div>
      hi other {user?.email} and {user?.name}
<Home/>


    </div>
  )
}

export default Other
