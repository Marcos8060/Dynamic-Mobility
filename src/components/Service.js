import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Service = () => {
    const [data,setData] = useState([])

    useEffect(() =>{
        axios.get('https://run.mocky.io/v3/d628facc-ec18-431d-a8fc-9c096e00709a')
        .then((res) =>{
            setData(res.data)
            console.log(res.data)
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])
  return (
    <div>Service</div>
  )
}

export default Service