import AuthApi from "../../api/authApi"
const SET_AUTH = 'SET_AUTH'
let initialState = {
  auth:null
} 
export const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_AUTH:
      return{
        ...state,auth:action.payload
      }
    default:
      return {...state}
  }
} 

export const login = (key) => {
  return async (dispatch) => {
    console.log(1111)
    const resp = await AuthApi.login(key).then(res => res.data).catch(err => err.response.status)
    console.log(resp)
    if(resp === true){
      dispatch(setAuth(true))
    }else{
      dispatch(setAuth(false))
    }
  }
}

export const checkAuth = () => {
  return async (dispatch) => {
    
    const resp = await AuthApi.check().then(res => res.data).catch(err => err.response.status)
    console.log(resp)
    dispatch(setAuth(resp))
  }
}
export const setAuth = (payload) => ({type:SET_AUTH, payload})

