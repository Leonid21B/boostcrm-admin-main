import base from "./base";

const CompaniesApi = {
  getCompanies(limit,page){
    console.log('get')
    return base.get(`/companies/${limit}/${page}`)
  },
  
  getSearchCompanies(searchStr){
    console.log('search')
    return base.post(`/companies/search`,{searchStr})
  }
}
export default CompaniesApi