import React, { Component } from "react";

class Formlist extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            comments:'',topic:''
        }
    }
    handleUsernamechange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentchange=event=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicchange=event=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleformSubmit=event=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.Topic}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleformSubmit}>
            <div>
               <label>UserNmae:</label>
               <input type={Text} value={this.state.username} onChange={this.handleUsernamechange}></input>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentchange}></textarea>
            </div>
            <div>
                <lavel>Topic:</lavel>
                <select value={this.state.topic} onChange={this.handleTopicchange}>
                    <option value='react'>React</option>
                    <option value='vue'>Vue</option>
                    <option value='Angular'>Angular</option>
                </select>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
  }
}
export default Formlist;
