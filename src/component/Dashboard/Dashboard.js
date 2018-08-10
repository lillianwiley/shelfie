import React, {Component} from 'react';
import Product from '../Product/Product';


class Dashboard extends Component{




    render(){

        let list = this.props.list.map((thing, i) => {
            console.log(thing)
        return(
            // <div>
            //     <img src="" alt=""/>
            //     <p>{thing.name}</p>
            //     <p>{thing.price}</p>
            // </div>
            <Product />
        )
        })
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default Dashboard;