import React from 'react';

import Header from './header';
import Footer from './footer';
import Login from '../pages/Login';


export default class Default extends React.Component {

        render() {
            return(
                <div>
                    <Login/>
                </div>
            )
        }

}