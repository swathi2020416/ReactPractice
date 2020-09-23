import React, { Component } from 'react'

 class RefsDemo extends Component {
     constructor(props) {
         super(props)
     
         this.inputref=React.createRef()
         this.cbref=null
         this.setcbref= element =>{
             this.cbref=element
         }
     }
     componentDidMount()
     { if(this.cbref){
         this.cbref.focus()
     }
        //  this.inputref.current.focus()
        //  console.log(this.inputref)
     }
    clickHandler=()=>{
        alert(this.inputref.current.value)
    }
     
    render() {
        return (
            <div>
                <input type="text" ref={this.inputref}></input>
                <input type="text" ref={this.setcbref}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
