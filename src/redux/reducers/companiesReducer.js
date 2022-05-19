import AuthApi from "../../api/authApi"
import CompaniesApi from "../../api/companiesApi"

const SET_SEARCH = 'SET_SEARCH'
const CLEAR = 'CLEAR'
const SET_NEW_COMPANIES = 'SET_NEW_COMPANIES'
let initialState = {
  sortedByDate:[],
  sortedByClients:[],
  search:[],
} 
export const companiesReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_NEW_COMPANIES:
      console.log(action.clients)
      return{
        ...state,sortedByDate:[...state.sortedByDate].concat(action.date),sortedByClients:[...state.sortedByClients].concat(action.date)
      }
    case SET_SEARCH:
      let newArr = []
      for (let it of action.payload){
        let obj = {
          admin :{
            email : it.email,
            fio : it.fio
          },
          takenSpace : it.company.takenSpace,
          id : it.company.id,
          paymentDate : it.company.paymentDate,

        }
        newArr.push(obj)
      }
      return{
        ...state,search:newArr
      }
    case CLEAR:
      return{
        ...state,sortedByDate:[],sortedByClients:[], search:[]
      }
    default:
      return {...state}
  }
} 

export const getCompanies = (limit,page,is = 1) => {
  return async (dispatch) => {
    if(is == 1){
      await dispatch(clear())
    }

    const resp = await CompaniesApi.getCompanies(limit,page).then(res => res.data)
    console.log(resp)

    dispatch(setCompanies(resp))
  }
}
export const getSearchCompanies = (str) => {
  return async (dispatch) => {
    const resp = await CompaniesApi.getSearchCompanies(str).then(res => res.data)
    console.log(resp.resUsers)
    dispatch(setSearch(resp.resUsers))
    
  }
}
export const clear = () => ({type: CLEAR})
export const setCompanies = ({resDate,resClients}) => ({type:SET_NEW_COMPANIES, clients: resClients, date: resDate})
export const setSearch = (payload) => ({type:SET_SEARCH, payload})