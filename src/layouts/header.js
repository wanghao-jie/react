import React,{Component} from "react";
import './header.css';


export default class Header extends Component{
    render() {
        return(
            <div className='nav'>
                <ul>
                    <li className='active'><a>首页</a></li>
                    <li><a>关注</a></li>
                    <li><a>栏目</a></li>
                </ul>
            </div>
        )
    }

}