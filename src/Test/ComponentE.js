import React, { Component } from 'react'
import ComponentF from './ComponentF'
import Usercontext from './userContext'

 class ComponentE extends Component {
    render() {
        return (
            <div>
                ComponentE context{this.context}
               <ComponentF/>
            </div>
        )
    }
}
ComponentE.contextType=Usercontext

export default ComponentE
