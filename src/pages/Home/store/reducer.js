
import {fromJS} from 'immutable';//引用组件：作用，防止reducer更改state

import * as actionTypes from  './actionTypes';

const  initState=fromJS({//把该对象变成不可更改对象
        topicList: [],
        artcleList: [],
        recommendImg:[],
        artclePage:1,
        showScroll:false,

    })
;

export default (state=initState,action)=>{

    switch (action.type){
        case  actionTypes.CHANGE_HOME_DATA:
           return state.merge({//相当于多个set
                topicList:fromJS(action.topicList),
                artcleList:fromJS(action.artcleList),
                recommendImg:fromJS(action.recommendImg),
            });

        case  actionTypes.CHANGE_MORE_DATA:
            return state.set('artcleList',state.get('artcleList').concat(action.list)).set('artclePage',action.nextPage);

        case actionTypes.TOGGLE_SCROLL_TOP:
            //console.log(action.show);
           return state.set('showScroll',action.show);
        default:
            return state;
    }

}