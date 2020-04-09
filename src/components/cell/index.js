import React,{Component} from 'react';
import styles from './style.module.css';
import propsType from 'prop-types';
import {withRouter} from 'react-router-dom'

class Cell extends Component{

    static defaultProps={
        index:'undefind',
        to:null
    };
    static propsType={
        index:propsType.number,
        data:propsType.shape({
            _id: propsType.string,
            title:propsType.string,
            des:propsType.srting
        }).isRequired,
        to:propsType.shape({
            pathname:propsType.string,
            apiname:propsType.string,
        })
    };
    to=(_id)=> {
        if (!this.props.to) return;
        let {history, to: {pathname, apiname}} = this.props;
        history.push({pathname: `${pathname}/${_id}`, search: `apiname=${apiname}`})
    };
    render() {
        let {index,data,children} = this.props;
        return(
            <div className={styles["uc-cell"]} onClick={()=>this.to(data._id)}>
                {
                    children
                }
                <h2>
                    {index+1?<span>{index+1+'.'}</span>:null}
                    {data.title}
                </h2>
                <p>{data.des}</p>
            </div>
        )
    }

}
export default withRouter(Cell)