import React from "react";
import Cell from "../components/cell"

export default class Column extends React.Component {
        render() {

            return(
                <div className='write'>
                    <Cell
                    data={{_id:"1",title:"asdsfgh",des:'这是一条数据'}}
                    to={{pathname:'./detail',apiname:'home'}}
                    />
                    {/*<button style={{float:'right'}}>++</button>*/}
                    <Cell
                        data={{_id:"1",title:"asdsfgh",des:'这是一条数据'}}
                        to={{pathname:'./detail',apiname:'home'}}
                    />
                </div>
            )
        }
}

