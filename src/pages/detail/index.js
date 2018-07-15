import React,{Component} from 'react';
import {
    DetailWrapper,
    Header,
    Content,
}from './style';

import {connect} from 'react-redux';//与store建立连接
import * as actionCreator from './store/actionCreator';

class Detail extends Component{
    render(){
        return(
           <DetailWrapper>
               <Header>{this.props.title}</Header>
               <Content
                   dangerouslySetInnerHTML={{ __html: this.props.content}}
               />
           </DetailWrapper>
        )
    }
    //页面加载完成之后
    componentDidMount(){
        this.props.getDetailData();
    }
}

//从store里取值
const mapStateToProps=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content']),
});

//向store发送一个axios请求，并对state赋值
const mapDispatchToProps=(dispatch)=>({
    getDetailData(){
        dispatch(actionCreator.getDetailData())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Detail);