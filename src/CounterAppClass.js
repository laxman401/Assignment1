import React, {Component} from 'react'

class CounterAppClass extends Component{
    constructor(props){
        super(props);
        this.state={
            qty:this.props.qtys
        }
    }
    increaseQty(){
        this.setState(
            {
                qty:this.state.qty+1
            }
        )
    }
    decreaseQty(){
        this.setState(
            {
                qty:this.state.qty-1
            }
        )

    }
render(){
    return(
        <div>
            <h1>Class Example</h1>
            <button onClick={()=>this.increaseQty()}>+</button>
            <h1>{this.state.qty}</h1>
            <button onClick={()=>this.decreaseQty()}>-</button>
        </div>
    )
}
}
export default CounterAppClass