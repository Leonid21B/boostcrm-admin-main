import React from "react";
import { useNavigate } from "react-router-dom";

const Company = (props) => {
  const navigate = useNavigate()
  return (
    <div className="company_item_container" onClick={() => navigate(props.company?.id)}>
      <div className="company_item_id"> ID компании: <br /> {props.company?.id}</div>
      <div className="company_item_admin">
        <div className="company_item_admin_fio">Ф.И.О: {props.company?.admin?.fio}</div>
        <div className="company_item_admin_email">email : {props.company?.admin?.email}</div>
      </div>
      <div className="company_item_tarif">
        <div className="company_item_tarif_space">Занято памяти: {props.company?.takenSpace}Мб</div>
        <div className="company_item_tarif_date"> Срок выходит: {Math.floor((new Date(props.company.paymentDate).getDay()) / 10)}{(new Date(props.company.paymentDate).getDay()) % 10}.{Math.floor((new Date(props.company.paymentDate).getMonth()) / 10)}{(new Date(props.company.paymentDate).getMonth()) % 10}.{new Date(props.company.paymentDate).getFullYear()}г</div>
        
      </div>
    </div>
  )
}

export default Company