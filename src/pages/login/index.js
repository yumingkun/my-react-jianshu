import React,{PureComponent} from 'react';
//PureComponent数据变化才重新渲染（性能优化）、时常和immutable结合

import * as actionCreator from './store/actionCreator'//引入组件，并起别名

import {connect} from 'react-redux'

import {Redirect} from 'react-router-dom';//引入重定向组件

import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
} from './style';


class Login extends PureComponent{

    render(){

        if (!this.props.loginStatus) {//登录失败返回继续返回登录页
            return(
                <LoginWrapper>
                    <LoginBox>
                        <h1>登录</h1>
                        {/*style-component提供的获取DOM节点的属性innerRef*/}
                        <Input placeholder="账号" innerRef={(input)=>{this.account=input}}/>
                        <Input placeholder="密码" innerRef={(input)=>{this.password=input}}/>
                        <Button onClick={()=>{this.props.login(this.account,this.password)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{//如果登录成功，则重定向到首页
            return <Redirect to='/'/>
        }

    }


}
//接收登录状态，来决定显示什么页
const mapStateToProps=(state)=>{
    return{
        loginStatus:state.getIn(['login','login'])
    }
};

//传值
const mapDispatchToProps=(dispatch)=>({
    login(account,password){//获取了Dom节点
        // console.log(account);
        // console.log(password);
        dispatch(actionCreator.login(account.value,password.value));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Login);