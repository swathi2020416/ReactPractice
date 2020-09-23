import React, { Component } from 'react'

 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Swathi'
         }
         console.log('LifecycleB constructor')
     }
     static getDerivedStatefromprps(props,state)
     {
         console.log('LifecycleB getDerived')
         return null
     }
     static shouldComponentUpdate(nextprops,nextstate)
     {
         console.log('Lifecyclebshouldcomponentupdate')
         return null
     }
     static getSnapshotBeforeUpdate(prevprops,prevstate)
     {
        console.log('LifecyclebBeforeUpdate')
     }
     componentDidMount(){
         console.log('LifecycleBCoponentDidmount')

     }
     
    render() {
       
            console.log('LifecycleB Render methood')
           return( <div>
              LifecycleRender  
          </div>
            
        )
    }
}

export default LifecycleB
