import React, { useState } from "react";

const ChangeSpace = (props) => {
  const [valueInput, setValue] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const [textAlert, setAlertText] = useState('Место успешно изменено')
  const [stateAlert, setAlertState] = useState(false)
  const handler = (e) => {
   setValue(e.target.value)
  }
  return(
    <div className="current_company_space_block">
      <h1 className="current_company_space_zag">Память:</h1>
      <h2 className="current_company_tarif_zag">Куплено памяти: {props.company?.space}Гб</h2>
      <h2 className="current_company_taken_zag">Занято памяти: {props.company?.space * 1024}Мб</h2>
      <h1 className="current_company_space_zag">Изменить количество памяти в гб:</h1>
      <form onSubmit = {handleSubmit} action="">
        <input onChange={handler} value={valueInput} type="number" placeholder="Количество памяти в гб" />
        <button>Изменить память</button>
      </form>
      <div className="current_company_alert_green">{textAlert}!</div>
    </div>
  )
}
export default ChangeSpace