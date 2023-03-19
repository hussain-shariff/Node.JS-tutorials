import React, {useState} from 'react'

function DashBoard() {
  const [msg, setmsg] = useState({})
  const [err, seterr] = useState(false)

  const getData = (token)=>{
    const headers = { 'Authorization': `Bearer ${token}` };
    fetch('/api/v1/dashboard', {headers})
      .then(res=> res.json())
      .then(json=> {
        setmsg(json)
        seterr(false)
      })
      .catch(err=> {
        seterr(true)
        setmsg({msg : 'Not authorised to access this route'})
      })
  }

  const handleClick = ()=>{
    const token = localStorage.getItem('token')
    getData(token)
  }
  return (
    <div className="container">
        <h4>Dashboard</h4>
        {err && <p className="token">no token present</p>}
        <div className="result">
          <h4>{msg.msg}</h4>
          <p>{msg.secret}</p> 
        </div>
        <button className="btn btn-block" id="data" onClick={handleClick}>get data</button>
    </div>
  )
}

export default DashBoard