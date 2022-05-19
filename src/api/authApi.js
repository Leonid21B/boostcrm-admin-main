import axios from 'axios'
import base from './base'


const AuthApi = {
  login(key){
    console.log('login')
    return base.post('/login',{key})
  },
  check(){
    console.log('check')
    return base.get('/check_auth')
  }
}

export default AuthApi