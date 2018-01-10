export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';

const getLoginSuccess = (path,data) => {
  return {
    type: GET_LOGIN_SUCCESS,
    data,
    path
  }
}
//登录
export const getLogin = (path, postData) => {   
    let url = target + path; 
    return dispatch => {
		getLoginSuccess(path,"success");
    }
}