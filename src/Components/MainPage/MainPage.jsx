import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, getCompanies } from "../../redux/reducers/companiesReducer";
import SearchCompanies from "./SearchCompanies/SearchCompanies";
import '../../styles/mainPage.scss'
import Company from "./Company/Company";
import { useNavigate } from "react-router-dom";
const MainPage = (props) => {
  const dispatch = useDispatch()

  const [condition,setCondition] = useState(0)

  const getFields = (c0,c1,c2,numb) => {
    return [c0,c1,c2][numb]
  }

  const search = () => {
    setCondition(2)
  }

  const companiesByDate = useSelector(state => state.companies.sortedByDate)

  const companiesByClients = useSelector(state => state.companies.sortedByClients)
  const searchCompanies = useSelector(state => state.companies.search)

 


  return(
    <div className="main_page_container">
      <div className="main_page_header">
      <SearchCompanies search = {search}/>
      <h1 className=" main_page_sort_zag">Сортировать по:</h1>
        <p onClick={() => setCondition(0)} className={condition != 0 ? "main_page_sort" :"main_page_active_sort"}>По дате</p>
        <p onClick={() => setCondition(1)} className={condition != 1 ? "main_page_sort" : "main_page_active_sort"}>По количеству клиентов</p>
      </div>
      {getFields(companiesByDate, companiesByClients, searchCompanies,condition)?.map((item,ind) => {
      return(
        <Company key={item.id + ind} company = {item}/>
      )
    })}
    </div>
  )
}

export default MainPage