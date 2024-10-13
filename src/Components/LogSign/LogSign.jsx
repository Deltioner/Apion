import React, {useState} from 'react'
import './LogSign.css'
import user_icon from "../../assets/user.png"
import password_icon from "../../assets/padlock.png"
import email_icon from "../../assets/email.png"
const LogSign = () => {

  const [action, setAction] = useState("Login");


  return (
    <div className='container1'>

      <div className="header">
        <div className="text">{action}</div>
      </div>

      <div className="inputs"> 
        
        {action === "Login" ?<div></div>:
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' />
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email'/>
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
        
        {action === "Sign Up"?  <div></div>:
        <div className="forgot-password">Forgot Passwrod? <span>Click Here!</span></div>}
        
        </div>
      
        <div className="submit-container">
          <div className={action ==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction('Login')}}>Login</div>
        </div>
    </div>
  )
}

export default LogSign
