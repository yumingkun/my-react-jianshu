import React, { Component } from 'react';
import Header from './header/index'
import {Provider} from 'react-redux';
import store from './store';

import {BrowserRouter,Route} from 'react-router-dom'//引入dom路由
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login'
import Writer from './pages/writer';
class App extends Component {
  render() {
    return (
        <Provider store={store}>

                {/*路由组件*/}
                <BrowserRouter>{/*一个路由*/}
                    <div>{/*路由规则*/}
                        <Header/>
                        <Route path='/' exact  component={Home}/>{/*exact表示只有路径完全完全匹配，才渲染*/}
                        <Route path='/detail/:id' exact component={Detail} />{/*可以通过 /detail/1 访问*/}
                        <Route path='/login'  exact  component={Login}/>
                        <Route path='/writer' exact component={Writer}/>

                    </div>
                </BrowserRouter>

        </Provider>
    );
  }
}

export default App;

