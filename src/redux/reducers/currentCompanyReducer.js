import currentApi from "../../api/currentApi"


const SET_COMPANY = 'SET_COMPANY'
const CHANGE_ADMIN = 'CHANGE_ADMIN'
const DELETE_USER = 'DELETE_USER'
const SET_ERROR = 'SET_ERROR'
const SET_DISABLE = 'SET_DISABLE'
const SET_PAYMENT_DATE = 'SET_PAYMENT_DATE'

let initialState = {
  company: null,
  errors :{
    date:false,
    space: false,
    users:false,
  },
  disabled : {
    date:false,
    space: false,
    users:false,
  }
  
}


const currentCompanyReducer = (state = initialState,action) => {
  switch(action.type){
    case SET_COMPANY:
      console.log(action)
      return {...state,company:action.company}
    case SET_ERROR:
      const type = action.err
      const bool = action.bool
      let newErrors = {...state.errors}
      newErrors[type] = bool
      return{
        ...state,errors:newErrors
      }
    case SET_DISABLE:
      const disable = action.disable
      const boole = action.bool
      let newDisables = {...state.disabled}
      newDisables[disable] = boole
      console.log([boole, newDisables])
      return{
        ...state,disabled: {...newDisables}
      }
    case CHANGE_ADMIN:
      console.log(action.userId)
      let lastAdmin = state.company.users.findIndex(item => item.role == 'admin')
      let nextAdmin = state.company.users.findIndex(item => item._id == action.userId)
      let users = [...state.company.users]
      users[lastAdmin].role = 'user'
      users[nextAdmin].role = 'admin'
      let company = {...state.company}
      company.users = users
      return {...state,company:company}
    case DELETE_USER:
      console.log(action.userId)
      let newUsers = [...state.company.users].filter(item => item._id != action.userId)
      let newCompany = {...state.company}
      company.users = newUsers
      return {...state,company:company}
    default:
      return{...state}
  }
}


const setCompany = (company) => ({type:SET_COMPANY, company})
const setChangeAdmin = (userId) => ({type:CHANGE_ADMIN,userId})
const setDeleted = (userId) => ({type:DELETE_USER,userId})
const setErrors = (bool,err) => ({type:SET_ERROR,bool,err})
const setDisable = (bool,disable) => ({type:SET_DISABLE,bool,disable})

export const getCompany = (id) => {
    return async (dispatch) => {
      console.log(id)
      const resp = await currentApi.getCompany(id).then(res => res.data)
      console.log(resp)
      await dispatch(setCompany(resp.company))
    }
}
export const changeAdmin = (userId) => {
  return async (dispatch) => {
    await dispatch(setDisable(true,'users'))
    console.log(userId)
    const resp = await currentApi.ChangeUsers(userId).then(res => res.data)
    if(resp) {
      await dispatch(setChangeAdmin(userId))
    }else{
      dispatch(setErrors(false,'users'))
      setTimeout(() => {
        dispatch(setErrors(true,'users'))
      },5000)
    }
  
    dispatch(setDisable(false,'users'))
  
    console.log(resp)
  }
}
export const deleteUser = (userId) => {
  return async(dispatch) => {
    await dispatch(setDisable(true,'users'))
    const resp = await currentApi.deleteUser(userId).then(res => res.data)
    console.log(resp)
    if(resp){
      await dispatch(setDeleted(userId))
    }else{
      dispatch(setErrors(false,'users'))
      setTimeout(() => {
        dispatch(setErrors(true,'users'))
      },5000)
    }
   
    dispatch(setDisable(false,'users'))
    
    
  }
}

export const changePayDate = (date,userId) => {
  return async (dispatch) => {
    dispatch(setDisable(true,'date'))
    const resp = await currentApi.changePayDate(date,userId).then(res => res.data)
    console.log(resp)
    if (!resp){
      dispatch(setErrors(true,'date'))
      setTimeout(() => {
        dispatch(setErrors(false,'date'))
      })
    }else{
      dispatch(setDisable(false,'date'))
    }
  }
}

export default currentCompanyReducer