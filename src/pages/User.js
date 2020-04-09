import React from 'react';
import '../assets/css/user.css';

export default class User extends React.Component{
    render(){
        return (
            <div className="content">
                <div className="header">
                    <h2><img src="/images/headimg.png" alt=""/></h2>
                    <div className="user-box">
                        <a>登录</a>
                        <a>注册</a>
                    </div>
                    <ul className="clear">
                        <li>
                            <span>0</span>
                            <p>关注</p>
                        </li>
                        <li>
                            <span>0</span>
                            <p className="end">粉丝</p>
                        </li>
                    </ul>
                </div>
                <div className="docList">
                    <ul>
                        <li className="gk-text">
                            <i></i>
                            <p>公开博文</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className="mm-text">
                            <i></i>
                            <p>秘密博文</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className="cg-text">
                            <i></i>
                            <p>草稿箱</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className="sc-text">
                            <i></i>
                            <p>收藏夹</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className="my_cz">
                            <i></i>
                            <p>收藏夹</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}