import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import PureCompo from './PureComponent'
// import Regcomp from './Regcomp'

 class ParentCopm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Swathi'
         }
     }
     componentDidMount()
     {
         setInterval(()=>{
             this.setState({
                 name:'Swathi'
             })
         },2000)
     }
     
    render() {
        return (
            <div>
                ParentComponent
                {/* <Regcomp name={this.state.name}></Regcomp>
                <PureCompo name={this.state.name}></PureCompo> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>

        )
    }
}

export default ParentCopm
