import axios from 'axios';
import * as actionTypes from "./actionTypes";



export const getDetailData=(id)=>{
    return (dispatch)=>{
        axios.get("/api/detail.json?id="+id)//通过不同id，获取不同的详情页
            .then((res)=>{
                const result=res.data.data;
                const action={
                    type:actionTypes.CHANGE_DETAIL_DATA,
                    title:result.title,
                    content:result.content,
                };
                dispatch(action);

            })
    }
};
