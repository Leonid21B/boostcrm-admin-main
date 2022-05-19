import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchCompanies } from "../../../redux/reducers/companiesReducer";

const SearchCompanies = (props) => {
  const dispatch = useDispatch()
  const [value,setValue] = useState('')
  const inputHandler = (e) => {
    setValue(e.target.value)
  }
  const handlerSubmit = (e) => {
    e.preventDefault()
    e.target.children[0].blur()
    console.log(value)
    if(value != 0) {
      dispatch(getSearchCompanies(value))
      props.search()
    }
    setValue('')
  }
  return(
    <div className="">
      <form onSubmit={handlerSubmit} action="">
        <input onChange={inputHandler} type="text" placeholder="Введите email" value={value}/>
        <button>Поиск</button>
      </form>
    </div>
  )
}

export default SearchCompanies