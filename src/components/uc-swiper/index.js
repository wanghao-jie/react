import React,{Component} from 'react';

import $ from 'jquery';
import swiper from './assets/js/swipe';

import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import styles from './style.module.css';
import Swipe from "./assets/js/swipe";

class UcSwiper extends Component {
    static defaultProps={};

    static propTypes={
        data:propTypes.arrayOf(propTypes.shape({
            _id:propTypes.string.isRequired,
            title:propTypes.string,
            sub_title:propTypes.string,
            banner:propTypes.string.isRequired,
            })).isRequired,
        to:propTypes.shape({
            pathname:propTypes.string.isRequired,
            apiname:propTypes.string.isrequired,
        })

};
  to=(_id)=>{
  if(!this.props.to) return;// to不存在，后续工作不做
  let {history,to:{pathnanme,apiname}} = this.props;
  // 编程式跳转
    history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`});
};
  // 挂载完毕 手写轮播图js代码
 componentDidMount(){
    new Swipe($('.style_banner__RETMt')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
        callback:function (index,element){
            $('.banner ol li').removeClass('active');
            $('.banner ol li').eq(index).addClass('active');
        }
    })
}

render(){
    let {data} = this.props;//[{banner:'',title:'',sub_title,_id:},{}]
    return (
        <div className={styles.banner}>
            <ul className={styles.clearfix}>
                {
                    data.map(item=>(
                        <li key={item._id} onClick={()=>this.to(item._id)}>
                            <img src={item.banner} alt=""/>
                            <div className={styles["text-box"]}>
                                <h2>{item.title}</h2>
                                <p>{item.sub_title}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
}
export default withRouter(UcSwiper)