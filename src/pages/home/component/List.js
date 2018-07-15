import React,{Component} from 'react';

import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux'

import * as actionCreators from '../store/actionCreator'

import {Link} from 'react-router-dom';

class List extends Component{
    render(){
        const {artcleList,loadModeList,Page} =this.props;
        return(
            <div>
                {
                    artcleList.map((item,index) => {
                    return (
                        <Link  key={index} to={'/detail/'+item.get('id')}>
                            <ListItem  >{/*遍历需要一个key值*/}

                                <img className='pic' alt="yu" src={item.get('imgUrl')}/>{/*获取immutable对象用get*/}
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>

                        )
                    })
                }
                <LoadMore  onClick={()=>loadModeList(Page)}>加载更多</LoadMore>
            </div>




        )
    }
}

const mapStateToProps=(state)=>{
    return({
        artcleList:state.get('home').get('artcleList'),
        Page:state.get('home').get('artclePage'),
    })
};

//thunk中间件允许dispatch向store发送一个函数，因为在发送之前会先执行actionCreators.loadMoreData()，从而向store发送
const mapDispatchToProps=(dispatch)=>{

    return {
        loadModeList(Page){
            dispatch(actionCreators.loadMoreData(Page));
        },
    }

};




export default connect(mapStateToProps,mapDispatchToProps)(List);