import React, { Component } from 'react';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    } from './style';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            focused:false,
        }
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>

                    <NavItem className='right'>登录</NavItem>
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
                        <NavSearch
                            className={this.state.focused?'focused':''}
                        />
                        <i className='iconfont'>&#xe61e;</i>
                    </SearchWrapper>
                </Nav>

            </HeaderWrapper>
        );
    }
}

export default App;
