import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Swathi'
         }
         console.log('LifecycleA constructor')
     }
     static getDerivedStatefromprps(props,state)
     {
         console.log('LifecycleA getDerived')
         return null
     }
     componentDidMount(){
         console.log('LifecycleACoponentDidmount')

     }
    //  static getDerivedStatefromprops(props,state)
    //  {
    //      console.log('LifecycleA getDerived')
    //      return null
    //  }
     static shouldComponentUpdate(nextprops,nextstate)
     {
         console.log('LifecycleAshouldcomponentupdate')
         return null
     }
     
     handlechange=()=>
     {
         this.setState({
             name:'codeevolution'
         })
     }
     
    render() {
       
            console.log('LifecycleA Render methood')
            return(<div>
                <div>LifecycleA</div>
                <button onClick={this.handlechange}>ChangeStatus</button>
                <LifecycleB/>
            </div>)
         }
}

export default LifecycleA
