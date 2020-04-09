import React from 'react';
import {render} from 'react-dom';

import { BrowserRouter,HashRouter, Route} from 'react-router-dom'
import Default from "./layouts/default";
import Detail from "./pages/Detail";
import Column from './pages/Column';
import Home from "./pages/Home";
import User from "./pages/User";

// 引入全局样式，字体控制js
import  './utils/font';
import './assets/css/index.css'


render(
    <BrowserRouter>
        <Route component={User}/>
    </BrowserRouter>,
    document.getElementById('root')
);