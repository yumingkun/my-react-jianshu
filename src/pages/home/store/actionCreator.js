import axios from 'axios'

import * as actionTypes from  './actionTypes';

import {fromJS} from 'immutable';

const changeHomeData=(result)=>({
    type:actionTypes.CHANGE_HOME_DATA,
    topicList:result.topicList,
    artcleList:result.artcleList,
    recommendImg:result.recommendImg,
});



//使用thunk中间件之后，action可以返回一个对象,这个对象执行完之后，转发给store
 export  const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json')
            .then((res)=>{
                const result=res.data;//获得数据之后通过action传给store,store自动传给reducer
                const action=changeHomeData(result);
                dispatch(action);
            });
    }
};


 //获取更多数据

export const  loadMoreData=(Page)=>{
     return (dispatch)=>{
        axios.get("/api/homeMoreList.json?page="+Page)
            .then((res)=>{
                const result=res.data.data;
                const action={
                    type:actionTypes.CHANGE_MORE_DATA,
                    list:fromJS(result),//转为immutable对象
                    nextPage:Page+1,
                };

                dispatch(action);

             })
     }
 };

export const toggleTopShow=(show)=>({
   type:actionTypes.TOGGLE_SCROLL_TOP,
   show:show,
});
