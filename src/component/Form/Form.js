import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super()


        this.state = {
            imgurl: '',
            productName: '',
            price: ''
        }

        this.handleUpdateImg = this.handleUpdateImg.bind(this)
        this.handleUpdatePrice = this.handleUpdatePrice.bind(this)
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleAddInventory = this.handleAddInventory.bind(this)

    }
            handleUpdateImg(event) {
                this.setState({
                    imgurl: event.target.value
                })
            }

            handleUpdateProduct(event) {
                this.setState({
                    productName: event.target.value
                })
            }

            handleUpdatePrice(event) {
                this.setState({
                    price: event.target.value
                })
            }

            handleCancel(){
                console.log('hello')
                this.setState({
                    imgurl:'',
                    productName: '',
                    price: ''
                })

            }

            handleAddInventory() {
                console.log('console is working')
                this.setState({
                    imgurl: '',
                    productName: '',
                    price: ''
                    
                })
            }



    render(){
        //console.log(this.state.imgurl)
        //console.log(this.state.price)
        console.log(this.state.productName)
        return(
            <div>
                <input value={this.state.imgurl}onChange={this.handleUpdateImg} type="text" placeholder="image"/>

                <input value={this.state.productName}onChange={this.handleUpdateProduct}type="text" placeholder="product name"/>

                <input value={this.state.price}onChange={this.handleUpdatePrice}type="text" placeholder="price"/>

                <button onClick={() => this.handleCancel()}>Cancel</button>

                <button onClick={() => this.handleAddInventory()}>Add to Inventory</button>
            </div>
        )
    } 
}


export default Form;