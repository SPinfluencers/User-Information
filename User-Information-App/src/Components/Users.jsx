import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import style from '../Components/user.css'

const getData = () => {
  return axios({
    url: 'https://62a584a5430ba53411c826d3.mockapi.io/products',
    method: 'GET'
  })
}

const Users = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
   getData()
   .then((res) => {
    setData(res.data)
   })
  },[])
  // console.log(data)

  return (
    <div>
      <h1>Users List</h1>
      {data.map((item) => (
        <div className='users'>
          <h3>User Id - {item.id}</h3>
          <h2>{item.firstName} {item.lastName}</h2>
          <img style={{ width: "100px" }} src={item.img} alt="" />
          <br />
          <br />
          <Link to={`/users/${item.id}`}>Show Details</Link>
        </div>
      ))}
    </div>
  )
}

export default Users