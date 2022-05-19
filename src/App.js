import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import MainPage from './Components/MainPage/MainPage';
import Params from './context/ParamsContext';
import { checkAuth } from './redux/reducers/authReducer';
import { getCompanies } from './redux/reducers/companiesReducer';
import "@fontsource/roboto"
import CurrentCompany from './Components/MainPage/CurrentCompany/CurrentCompany';

function App() {
  const pathname = useLocation()
  
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.auth,(r,l) => {
    if(l != r){
      return false
    }else{
      return true
    }
  })

  useEffect(() => {
    if(isAuth){
      dispatch(getCompanies(20, 1,1))
    }
  },[isAuth])

  useEffect(() => {
    if(isAuth === null){
      dispatch(checkAuth())
    }
  },[isAuth])
  if(pathname.pathname.indexOf('/admin') != -1){
    if(isAuth === null || isAuth === undefined){
        return(
          <div> Идёт загрузка ...</div>
    )}
    if( isAuth === false){
      if(pathname.pathname != '/admin'){
        return(
          <Navigate to="../../admin" />
        )
      }
      return(
      <Login/>
      )
    }

    
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/admin/analytics' element = {<div>Aalitica</div>}/>
          <Route path='/admin/clients/:id' element = {<CurrentCompany/>}></Route>
          <Route path='/admin/clients' element = {<MainPage/>}></Route>
          <Route path='/admin' element = {<Navigate to={'/admin/clients'}/>}/>
        </Routes>
      </div>
    );
  }
}
export default App;
