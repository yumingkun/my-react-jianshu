import React,{PureComponent} from 'react';
//PureComponent数据变化才重新渲染（性能优化）、时常和immutable结合


import {connect} from 'react-redux'

import {Redirect} from 'react-router-dom';//引入重定向组件




class Writer extends PureComponent{

    render(){

        if (this.props.loginStatus) {//如果已经登录。显示写文章
            return(
                <div>
                    <h1>写文章</h1>
                </div>
            )
        }else{//如果点击写文章，没有登录，则重定向到登录页
            return <Redirect to='/login'/>
        }

    }


}
//接收登录状态，来决定显示什么页
const mapStateToProps=(state)=>{
    return{
        loginStatus:state.getIn(['login','login'])
    }
};


export default connect(mapStateToProps,null)(Writer);