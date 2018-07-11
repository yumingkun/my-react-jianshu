import styled from 'styled-components';

import logoPic from '../statics/jianshu.png';//引入图片

// 创建一个HeaderWrapper组件（其实质是：div+自定义样式）
export  const HeaderWrapper=styled.div`
    position:relative;//绝对定位
    height:58px;
    width:100%;
    border-bottom:1px solid #f0f0f0;
`;


export const Logo=styled.a.attrs({//添加属性等同（<a href='/'></a>）
    href:'/',
})`
    position:absolute; //相对定位 
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});//多行文本嵌入变量（引入图片的格式）
    background-size:contain;//背景适应边框大小
`;
export const Nav=styled.div`
    width:60%;
    height:100%;
    margin:0 auto;
    
`;

export const NavItem=styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px
    color:#333
    // 为组件加上类选择器等于  className='left active'
    &.left{
        float:left
    }
    &.right{
        float:right
        color:#969696
    }
    &.active{
        color:#ea6f5a;
    }

`;
export  const  SearchWrapper=styled.div`
    position:relative;
    float:left;
    
    //为此组件内部的组件，类名为iconfont加上样式
    //               < SearchWrapper> 
    //                   < i className='iconfont'/>
    //               < /SearchWrapper>
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        // background:green;
        text-aline:center;
    }
`;
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding:0 20px
    margin-top:9px;
    border:none;
    outline:none;
    background:#eee;
    box-sizing:border-box;
    border-radius:19px;
    font-size:13px;
    color:#666;
    //为此组件的placeholder属性加上样式
    &::placeholder{
         color:#999
    }
    //
    &.focused{
        width:200px;
    }
`;
export const Addition=styled.div`
     position:absolute;
     top:0;
     right:0    
     height:56px;
`;
export const Button=styled.div`
    float:right;
    margin-top:9px;
    margin-right:30px;
    padding:0 20px
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
    

`;


