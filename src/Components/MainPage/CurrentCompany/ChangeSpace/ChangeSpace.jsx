import React, { useState } from "react";
import { useDispatch } from "react-redux";
import getClassNameAndText from "../../../../functions/getAlert";
import useAlert from "../../../../hooks/AlertHook";
import { changeSpace } from "../../../../redux/reducers/currentCompanyReducer";

const ChangeSpace = (props) => {
  const dispatch = useDispatch()
  const [valueInput, setValue] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changeSpace(valueInput, props.company?._id ))
  }
  const [err,setErr] = useState(false)
  const [success,setSuccess] = useState(false)

  const [stateAlert, setAlertState] = useState(false)
  const [disable,error] = useAlert('space',setSuccess,setErr)
  const handler = (e) => {
   setValue(e.target.value)
  }
  return(
    <div className="current_company_space_block">
      <h1 className="current_company_space_zag">Память:</h1>
      <h2 className="current_company_tarif_zag">Куплено памяти: {props.company?.space}Гб</h2>
      <h2 className="current_company_taken_zag">Занято памяти: {props.company?.takenSpace * 1024}Мб</h2>
      <h1 className="current_company_space_zag">Изменить количество памяти в гб:</h1>
      <form onSubmit = {handleSubmit} action="">
        <input onChange={handler} value={valueInput} type="number" placeholder="Количество памяти в гб" />
        <button disabled = {disable}>Изменить память</button>
      </form>
      <div className={getClassNameAndText(err, success)[0]}>{getClassNameAndText(err,success)[1]}</div>
    </div>
  )
}
export default ChangeSpace