import React,{Component} from 'react';

import {TopicItem,TopicWrapper} from '../style';

import {connect} from 'react-redux';

class Topic extends Component{
    render(){
        return(
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                        return(
                            <TopicItem key={item.get('id')}>
                                <img className="topic-pic" alt="1" src={item.get('imgUrl')}/>{/*获取immutable对象*/}
                                {item.get('title')}{/*获取immutable对象*/}
                            </TopicItem>
                        )
                    })
                }






            </TopicWrapper>
        )
    }
}
const  mapStateToProps=(state)=>({
    list:state.get('home').get('topicList'),
});
export default connect(mapStateToProps,null)(Topic);