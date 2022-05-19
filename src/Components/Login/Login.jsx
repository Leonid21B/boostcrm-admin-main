import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import '../../styles/login.scss'

const Login = (props) => {
  const [inputVal,setInputVal] = useState('')
  const dispatch = useDispatch()
  
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login(inputVal))
  }

  const inputHandler = (e) => {
    setInputVal(e.target.value)
  }

  return(
    <div className="login_container">
      <div className="wrapper_login">
        <h1 className="login_zag">Login</h1> 
        <p className="login-text">Введите ключ доступа:</p>
        <form onSubmit={(e) => onSubmit(e)}>
          <input value={inputVal} type="password" className="" onChange={(e) => inputHandler(e)}/>
        </form>
      </div>
    </div>
    
  )
}

export default Login