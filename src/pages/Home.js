import React,{Component} from 'react';

import UcSwiper from '../components/uc-swiper';
import Cell from "../components/cell";


export default class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <UcSwiper
                data={[
                    {_id:'1',title:'alex',sub_title:'alex123',banner:'/images/img_1.jpg'},
                    {_id:'2',banner:'/images/img_1.jpg'},
                ]}
                to={{pathname:'/detail',apiname:'ccbanner'}}
                />

                <Cell
                index={0}
                data={{_id:'1',title:'sadsdsa',des:'数据cell'}}
                to={{pathname:'/detail',apiname:'home'}}
                />
            </div>
        )
    }
}