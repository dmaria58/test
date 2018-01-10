import { GET_LOGIN_SUCCESS} from '../Action/login'  //登录,退出等所有user操作

export const getLoginData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_LOGIN_SUCCESS:
            return Object.assign({},state,action);            
        default:                                          
            return state;
    }
}