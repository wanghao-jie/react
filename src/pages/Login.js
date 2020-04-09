import React,{Component} from 'react';
import '../assets/css/login.css'
import UcNav from "../components/uc-nav"
import UcButton from "../components/uc-button";

export default class Login extends Component{
    show=()=>{
        console.log("show")
    };
    render(){
        return (
            <div className="content">
                <UcNav arrow='gray' borderWidth={0} bgColor='transparent' />
                <h1></h1>
                <div className='login-box'>
                    <p className='lsolid'></p>
                    <div className="login">
                        <a>登录</a>
                        <span></span>
                        <a>注册</a>
                    </div>
                    <p className="rsolid"></p>
                </div>
                <ul>
                    <li className="lifirst">
                        <input type="text" defaultValue=""/>
                        <span>帐号</span>
                    </li>
                    <li>
                        <input type="text" defaultValue=""/>
                        <span>密码</span>
                    </li>
                </ul>
                <div className="footbox">
                    <UcButton style={{marginTop:'0.64rem',width:"100%"}} clickHandler={this.show}>登录录</UcButton>
                    {/*<UcButton clickHandler={this.show.bind(null,1,2,3)}>登录录</UcButton>*/}
                    {/*<UcButton clickHandler={(ev)=>this.show(1,2,3,ev)}>登录录</UcButton>*/}
                    <a className="tishi">忘记密码？</a>
                </div>
            </div>

        )
    }
}