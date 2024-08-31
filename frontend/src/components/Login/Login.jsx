import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Login.css'

const Login = ({setShowlogin}) => {
    const [hasAccount, setHasAccount] = useState(false)

  return (
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{hasAccount? "Login" :"Sign Up"}</h2>
                <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {!hasAccount &&  <input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{hasAccount ? "Login" : "Sign Up"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By countinuing, I agree with the terms of use and privacy policy.</p>
            </div>    
            {hasAccount ? <p>Create a new account? <span onClick={() => setHasAccount(false)}>Click here</span></p>
                : <p>Already have an account? <span onClick={() => setHasAccount(true)}>Login here</span></p>
                }
        </form>
    </div>
  )
}

export default Login