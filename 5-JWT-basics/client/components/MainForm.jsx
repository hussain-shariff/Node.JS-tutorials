import React, {useState, useRef} from 'react'

function MainForm() {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const [error, seterror] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(usernameRef.current.value === "" || passwordRef.current.value === ""){
            seterror(true)
            return
        }
        seterror(false)
        fetch('/api/v1/login', {
            method : "POST",
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify({
                username : usernameRef.current.value,
                password : passwordRef.current.value
            }),
        })
            .then(res=> res.json())
            .then(json=> localStorage.setItem('token', json.token))
            .catch(err=> localStorage.removeItem('token'))
        usernameRef.current.value = ""
        passwordRef.current.value = ""
    }
    
  return (
    <form className="form contact-form" onSubmit={handleSubmit}>
        <h5>login/register</h5>
        <div className="form-row">
            <label htmlFor="username" className="form-label">username</label>
            <input ref={usernameRef} type="text" id='username' className="form-input username-input" />
        </div>
        <div className="form-row">
            <label htmlFor="password" className="form-label">password</label>
            <input ref={passwordRef} type="password" id='password' className="form-input password-input" />
        </div>
        {error && <div className="token">fill the form</div>}
        <button type="submit" className="btn btn-block">submit</button>
    </form>
  )
}

export default MainForm