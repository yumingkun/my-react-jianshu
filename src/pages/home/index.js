import React,{PureComponent} from 'react';

//PureComponent数据变化才重新渲染（性能优化）、时常和immutable结合

//引入首页的各个组件
import Topic from './component/Topic';
import Writer from './component/Writer';
import Recommend from './component/Recommend';
import List from './component/List';



import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreator'

import {BackTop} from './style';


import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
}from './style'

class Home extends PureComponent{
    backTop=()=>{//回到顶部
        window.scrollTo(0,0);
    };
    render(){
        return(
            <div>
                <HomeWrapper>

                    <HomeLeft>
                        <img className='banner-img' alt="1"  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531492914011&di=572ab88633de476adecb027d684da249&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F06%2F11%2F146563930573361816.JPEG" />


                        <Topic/>
                        <List/>
                    </HomeLeft>

                    <HomeRight>
                        <Recommend/>
                        <Writer/>
                    </HomeRight>

                </HomeWrapper>
                {this.props.showScroll? <BackTop onClick={this.backTop}>顶部</BackTop>:''}

            </div>
        )
    }
    //组件加载完毕执行
    componentDidMount(){//用本地数据模拟后台数据
       this.props.changeHomeData();
       this.bindEvents();
    }
    //组件销毁之后执行
    componentWillUnmount(){
        window.removeEventListener('scroll' , this.props.changeScrollTopShow)//监听滚动事件

    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)//监听滚动事件
    }

}
//取值
const mapStateToProps=(state)=>({
   showScroll:state.getIn(['home','showScroll'])
});
//传值
const mapDispatchToProps=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(){
        //console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop>100){
        //    console.log('ture');
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);