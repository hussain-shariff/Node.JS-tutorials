import React, {useState} from 'react'

function DashBoard() {
  const [msg, setmsg] = useState('')

  const getData = (token)=>{
    const headers = { 'Authorization': `Bearer ${token}` };
    fetch('/api/v1/dashboard', {headers})
      .then(res=> res.json())
      .then(json=> setmsg(json.msg))
  }

  const handleClick = ()=>{
    const token = localStorage.getItem('token')
    getData(token)
  }
  return (
    <div className="container">
        <h4>Dashboard</h4>
        <p className="token">no token present</p>
        <div className="result">{msg}</div>
        <button className="btn btn-block" id="data" onClick={handleClick}>get data</button>
    </div>
  )
}

export default DashBoard