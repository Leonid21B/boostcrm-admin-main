import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import App from "../App";
import { checkAuth } from "../redux/reducers/authReducer";

const Auth = ({children}) => {
  console.log(children)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(checkAuth())
  },[])
  return(
    <App/>
  )
}
export default Auth