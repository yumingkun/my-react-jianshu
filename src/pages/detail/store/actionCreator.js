import axios from 'axios';
import * as actionTypes from "./actionTypes";



export const getDetailData=()=>{
    return (dispatch)=>{
        axios.get("/api/detail.json")
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
