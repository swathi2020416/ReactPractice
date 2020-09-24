import React, { Component } from 'react'

 class ClickCounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     incrementHandler=()=>
     {
         this.setState(prevState=>
            {
                return {count:prevState.count+1}
            }
         )
     }
    render() {
        const {count}=this.state
        return (
            <div>
                <button onClick={this.incrementHandler}> Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter
