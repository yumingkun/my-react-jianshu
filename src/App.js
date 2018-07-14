import React, { Component } from 'react';
import Header from './header/index'
import {Provider} from 'react-redux';
import store from './store';

import {BrowserRouter,Route} from 'react-router-dom'//引入dom路由
import Home from './pages/Home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
        <Provider store={store}>

                {/*路由组件*/}
                <BrowserRouter>{/*一个路由*/}
                    <div>{/*路由规则*/}
                        <Header/>
                        <Route path='/' exact  component={Home}/>{/*exact表示只有路径完全完全匹配，才渲染*/}
                        <Route path='/detail' exact component={Detail} />
                    </div>
                </BrowserRouter>

        </Provider>
    );
  }
}

export default App;
