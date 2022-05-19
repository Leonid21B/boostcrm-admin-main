import React, { useEffect, useState } from 'react'

const params = window.location.pathname

const Params = React.createContext('/')

export const ParamsContext = ({children}) => {
  const [paramsState,setParams] = useState('/')

  useEffect(() => {
    console.log(params,1111)
    if(params != paramsState){
      setParams(params)
    }
  },[params])
  return(
    <Params.Provider value={paramsState} >
      {children}
    </Params.Provider>
  )
}
export default Params