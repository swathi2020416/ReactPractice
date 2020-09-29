import React, { Component } from 'react'

 class HoverHeading extends Component {
    //   constructor(props) {
    //     super(props)
    
    //     this.state = {
    //           count:0
    //     }
    //  }
    //  incrementHandler=()=>
    //  {
    //      this.setState(prevState=>
    //     {
    //             return {count:prevState.count+1}
    //         }
    //      )
    //  }
    render() {
        const {count,incrementCount}=this.props.children
        return (
           <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        )
    }
}

export default HoverHeading
