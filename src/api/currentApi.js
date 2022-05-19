import base from "./base";

const currentApi = {
  getCompany(id){
    console.log(id)
    return base.get(`/company/get_current_company/${id}`)
  },
  ChangeUsers(userId){
    return base.post(`/company/change_company_admin/${userId}`)
  },
  deleteUser(userId){
    return base.delete(`/company/delete_user/${userId}`)
  },
  changePayDate(date,companyId){
    return base.put('/company/change_payment_date',{date,companyId})
  },
  changeSpace(newSpace,companyId){
    return base.put('/company/change_space',{newSpace,companyId})
  }
  
}

export default currentApi