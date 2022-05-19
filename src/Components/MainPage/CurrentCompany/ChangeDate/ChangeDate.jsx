import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import getClassNameAndText from "../../../../functions/getAlert";
import useAlert from "../../../../hooks/AlertHook";
import { changePayDate } from "../../../../redux/reducers/currentCompanyReducer";

const ChangeDate = (props) => {
  const dispatch = useDispatch()
  const nowDate = new Date

  const [err,setErr]  = useState(false)
  const [succ,setSuccess]  = useState(false)
  
  const [disable,error] = useAlert('date',setSuccess,setErr)
  const [stateAlert,setAlertState] = useState(false)
  const [stateDate, setStateDate] = useState(`${nowDate.getFullYear()}-${Math.floor(nowDate.getDate() / 10) == 0 ? 0 : null}${nowDate.getDate()}-${Math.floor(nowDate.getMonth() / 10) == 0 ? 0 : null}${nowDate.getMonth()}`)

  const change =(e) => {
    if(stateDate){
      let date = new Date()
      date.setDate(stateDate?.split('-')[2])
      date.setMonth(stateDate?.split('-')[1])
      date.setFullYear(stateDate?.split('-')[0])
      console.log(date.toJSON())
      console.log(props.company?._id)
      dispatch(changePayDate(date.toJSON(), props.company?._id))
    }
  }
  const inputHandler = (e) => {
    setStateDate(e.target.value)
  }
  return(
    <div className="current_company_date_block">
      <h1 className="current_company_date_zag">Дата:</h1>
      <h2 className="current_company_date_pay_zag">Оплачено до: {Math.floor(new Date(props.company?.paymentDate).getDate() / 10) == 0 ? 0 : null}{new Date(props.company?.paymentDate).getDate()}.{Math.floor(new Date(props.company?.paymentDate).getMonth() / 10) == 0 ? 0 : null}{new Date(props.company?.paymentDate).getMonth()}.{new Date(props.company?.paymentDate).getFullYear()}</h2>
      <h1 className="current_company_date_zag">Изменить дату тарифа:</h1>
      <input className="current_company_input_date" onChange={disable ? null : (e) => inputHandler(e)} type="date" value = {stateDate}/>
      <button onClick={change}>Изменить дату</button>
      <div className={getClassNameAndText(err, succ)[0]}>{getClassNameAndText(err,succ)[1]}</div>
    </div>
  )
}

export default ChangeDate