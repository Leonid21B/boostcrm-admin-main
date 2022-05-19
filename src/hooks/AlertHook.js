import React, { useState } from "react";
import { useSelector } from "react-redux";

const useAlert = (type,callbackSucc, callbackErr) => {
  const [error,setError] = useState(false)
  const [succ,setSucsess] = useState(false)
  const checkChanges = (l,r,type) => {
    switch(type){
      case 'error':
        if(l == false && r == true){
          if(error != true){
            callbackErr(true)
            setError(true)
          }
          return false
          
        }
        if(l == true && r == false){
          if(error != false){
          callbackErr(false)
          setError(false)
          }
          return false
        }
      case 'disable' :
        if(l == false && r == true){
          if(succ != true){
            callbackSucc(true)
            setSucsess(true)
            setTimeout(() => {
              callbackSucc(false)
              setSucsess(false)
            },1000)     
          }    
        }
        return false
      default:
        return true
    }
  }

  const err = useSelector(state => state.current.errors[type],(l,r) => {
    if(l == r){
      return true
    }
    return checkChanges(l,r,'error')
  })
  const disable = useSelector(state => state.current.disabled[type],(l,r) => {
    if(l == r){
      return true
    }
    return checkChanges(l,r,'disable')
  })
  return [disable,err]
}

export default useAlert