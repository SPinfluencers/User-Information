import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import style from '../Components/user.css'

const Userdetails = () => {
    const [data, setData] = React.useState([])
    const params = useParams();
    console.log(params)

    const getData = () => {
        return axios({
          url: `https://62a584a5430ba53411c826d3.mockapi.io/products/${params.user_id}`,
          method: 'GET'
        })
      }

    React.useEffect(() => {
       getData()
       .then((res) => {
        setData(res.data)
       })
    }, [])
    console.log(data)

  return (
    <div >
        <h1>User Details</h1>
        <div className='userdetails'>
          <h4>User Id - {data.id}</h4>
          <h2>{data.firstName} {data.lastName}</h2>
          <img style={{ width: "100px" }} src={data.img} alt="" />
          <p>{data.details}</p>
          <div>
            <Link to="/users">Go Back</Link>
          </div>
        </div>
    </div>
  )
}

export default Userdetails