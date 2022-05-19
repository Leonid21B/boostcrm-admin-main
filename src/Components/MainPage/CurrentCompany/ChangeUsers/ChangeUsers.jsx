import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getClassNameAndText from "../../../../functions/getAlert";
import useAlert from "../../../../hooks/AlertHook";
import closeIcon from '../../../../img/close.svg'
import plusIcon from '../../../../img/plus.svg'
import { changeAdmin, deleteUser } from "../../../../redux/reducers/currentCompanyReducer";

const ChangeUsers = (props) => {

  const dispatch = useDispatch()
  const [admin,setAdmin] = useState(null)
  const [users,setUsers] = useState([])
  const [err,setErr] = useState(false)
  const [success,setSucsess] = useState(false)
  const [disable, error] = useAlert('users', setSucsess,setErr)
  console.log(disable,error)

  {/*const checkAlerts = (left,right,type) => {
    console.log(left,right,type)
    switch (type) {
      case 'disable' :
        if (left == false && right == true){
          if(success != true){
            setSucsess(true)
            setTimeout(() => {
              console.log(success)
              setSucsess(false)
            },5000)
          }
        }
        return false
      case 'error':
        if(left == false && right == true){
          if(err != true){
            setErr(true)
          }
        }else if(left == true && right == false){
          if(err != false){
            setErr(false)
          }
        }
        return false
      default:
        return true
    }
  }
  
  const disable = useSelector(state => state.current.disabled.users, (l,r) => {
    console.log(l,r)
    if(l != r){
      return checkAlerts(l, r, 'disable')
    }  
    return true
  })
  const error = useSelector(state => state.current.errors.users, (l, r) => {
    console.log(l, r)
    if (l != r) {
      return checkAlerts(l, r, 'err')
    }
    return true
  })
  
  */}

  const changeAd = (userId) => {
    dispatch(changeAdmin(userId))
  }
  const delUser = (id) => {
    dispatch(deleteUser(id))
  }
  useEffect(() => {
    setAdmin(props.company?.users?.filter(item => item.role == 'admin')[0])
    setUsers(props.company?.users?.filter(item => item.role != 'admin'))
  },[props.company])
  return(
    <div className="current_company_users_block">
      <h1 className="current_company_user_zag">Админ:</h1>
      {admin ? <div className="current_company_admin_item"><img src={`${process.env.REACT_APP_STATIC_SERVER_PATH}/${admin?.avatar}`} style={{ width: '40px', height: '40px' }} alt="" /><p> {admin.fio}</p> <p> {admin.email}</p> <div className=""> <div></div></div></div> : null}
      <h1 className="current_company_user_zag">Сотрудники:</h1>
      <div className="current_company_users_block">
        {users?.map(item => {
          return(
            <div className="current_company_user_item"><img src={`${process.env.REACT_APP_STATIC_SERVER_PATH}/${item?.avatar}`} style={{ width: '40px', height: '40px' }} alt="" /> <p> {item.fio}</p> <p> {item.email}</p> <div className=""><img src={plusIcon} alt="" onClick={disable ? null : () => changeAd(item._id)}/> <img onClick = {disable ? null : () => delUser(item._id)}src={closeIcon} alt="" /></div></div>
          )
        })}
      </div>
      <div className={getClassNameAndText(err, success)[0]}>{getClassNameAndText(err, success)[1]}</div>
    </div>
  )
}

export default ChangeUsers