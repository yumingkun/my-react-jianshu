
import axios from 'axios';
import * as actionTypes from './actionTypes';

export const login=(account,password)=>{
    return (dispatch)=>{//数据模拟先不用post
        axios.get('/api/login.json?account='+account+"&password="+password)
            .then((res)=>{
                const result=res.data;
                if (result) {
                    const action = {
                        type: actionTypes.CHANGE_LOGIN,
                        value: true
                    };
                    dispatch(action);
                }else {
                    alert('登录失败')
                }

            })
    }
};

export const loginOut=()=>({
    type:actionTypes.LOGINOUT,
    value:false,
});