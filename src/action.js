import {LOGIN,CANCEL_LOGIN,SET_USER_NAME,SET_TOKEN,REFETCH_MY_TEMPLATE_DATAS} from './constant'

const login =()=>{
    return {
        type:LOGIN
    }
}

const cancelLogin=()=>{
    return {
        type:CANCEL_LOGIN
    }
}

const setUserName=(data)=>{
    return {
        type:SET_USER_NAME,
        data:data
    }
}

const setToken=(data)=>{
    return {
        type:SET_TOKEN,
        data:data
    }
}

const refetchMyTemplateDatas=()=>{
    return {
        type:REFETCH_MY_TEMPLATE_DATAS,
    }
}
export  {login,cancelLogin,setUserName,setToken,refetchMyTemplateDatas}