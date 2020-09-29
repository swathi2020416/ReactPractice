import React, { Component } from 'react'
import withCounter from './withCounter'

 class ClickCounter extends Component {
    //  constructor(props) {
    //      super(props)
     
    //      this.state = {
    //           count:0
    //      }
    //  }
    //  incrementHandler=()=>
    //  {
    //      this.setState(prevState=>
    //         {
    //             return {count:prevState.count+1}
    //         }
    //      )
    //  }
    render() {
       const {count,incrementHandler}=this.props
        return (
            <div>
                <button onClick={incrementHandler}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,10)
