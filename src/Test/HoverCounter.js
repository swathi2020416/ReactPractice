import React, { Component } from 'react'
import withCounter from './withCounter'



 class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // incrementHandler=()=>
    // {
    //     this.setState(prevState=>
    //        {
    //            return {count:prevState.count+1}
    //        }
    //     )
    // }
    render() {
        const {count,incrementHandler}=this.props
        return (
            <div>
            <h1 onMouseOver={incrementHandler}>
           Hovered {count} times 
            </h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter,5)
