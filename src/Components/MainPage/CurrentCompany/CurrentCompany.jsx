import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCompany } from "../../../redux/reducers/currentCompanyReducer";
import '../../../styles/currentCompany.scss'
import ChangeDate from "./ChangeDate/ChangeDate";
import ChangeSpace from "./ChangeSpace/ChangeSpace";
import ChangeUsers from "./ChangeUsers/ChangeUsers";

const CurrentCompany = (props) => {
  const params = useParams()
  const dispatch = useDispatch()
  const company = useSelector(state => state.current.company)
  
  useEffect(() => {
    dispatch(getCompany(params.id))
  },[])
  return(
    <div className="current_company_body">
      <ChangeDate company = {company}/>
      <ChangeSpace company = {company}/>
      <ChangeUsers company = {company}/>
    </div>
  )
}

export default CurrentCompany