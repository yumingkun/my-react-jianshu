import React ,{Component}from 'react';

import {CSSTransition } from 'react-transition-group';

import {connect} from 'react-redux';

// import {searchBlur,searchFocus} from './store/actionCreator';
import * as actionCreator from './store/actionCreator'//引入组件，并起别名

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from './style';

import {Link} from 'react-router-dom';


class Header extends Component{

    //是否显示搜索面板方法

    SearchShow=()=>{
        const {focused,list,page,mouseIn,handleMouseEnter,handleMouseLeave,totalPage,handleChangePage}=this.props;
        const newList=list.toJS();
        const pageList=[];
        if (newList.length){
            for (let i=(page-1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}> {newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused ||mouseIn ){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage)}}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    {/*//打印搜索面板每一个item*/}
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }

    };
    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login}=this.props;
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>

                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>



                    {
                        login? <NavItem className='right'>退出</NavItem>:<Link to='/login'> <NavItem className='right'>登录</NavItem></Link>
                    }

                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>

                    <Addition>
                        <Button className='writting'>
                            <i className='iconfont'>&#xe61b;</i>
                            写文章
                        </Button>
                        <Button className='reg'>注册</Button>
                    </Addition>

                    <SearchWrapper>

                        {/*//对输入框添加样式*/}
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='yu'
                        >
                            <NavSearch
                                className={focused?'focused':''}
                                onFocus={ ()=>handleInputFocus(list)}
                                onBlur={ handleInputBlur}
                            />
                        </CSSTransition>

                        <i className={focused?'focused iconfont':'iconfont'}>&#xe61e;</i>

                        {/*调用显示搜索面板方法*/}
                        {this.SearchShow()}

                    </SearchWrapper>
                </Nav>

            </HeaderWrapper>
        )
    };
}





//取出store的数据
const mapStateToProps=(state)=>{//把store里的state映射到自定义属性上
  return {
      // focused:state.header.focused,
      // focused:state.get('header').get('focused'), //引入immutable和redux-immutable之后的写法
      focused:state.getIn(['header','focused']),//上面代码也可以这样写
      list:state.getIn(['header','list']),
      page:state.getIn(['header','page']),
      mouseIn:state.getIn(['header','mouseIn']),
      totalPage:state.getIn(['header','totalPage']),
      login:state.getIn(['login','login'])
  }
};
const mapDispatchToProps=(dispatch)=>{
   return {//返回的是一个对象，不是代码块，故不能用箭头函数
       handleInputFocus(list){
           if (list.size===0){//只有没有数据的时候才发送axios请求
               dispatch(actionCreator.getList());
           }
           dispatch(actionCreator.searchFocus());
       },
       handleInputBlur(){
           dispatch(actionCreator.searchBlur());
       },
       handleMouseEnter(){
           dispatch(actionCreator.mouseEnter());
       },
       handleMouseLeave(){
           dispatch(actionCreator.mouseLeave());
       },
       handleChangePage(page,totalPage){
           if (page<totalPage){
               dispatch(actionCreator.changePage(page+1))
           }else {
               dispatch(actionCreator.changePage(1))
           }
       }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
