const getClassNameAndText = (err,success) => {
    console.log(err,success,11111)
    if(err === true) {
      return ['red_alert','Произошла ошибка!']
    }
    if(success === true){
      return ['green_alert','Успешно!']
    }
    return ['non_active','11111']
  }
export default getClassNameAndText