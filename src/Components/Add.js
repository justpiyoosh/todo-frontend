import { Component } from "react";
import {withRouter} from 'react-router-dom'


class Add extends Component{

    constructor(props){
        super(props)
        this.handleMember = this.handleMember.bind(this)
    }

    handleMember(){

        const title = document.getElementById('title').value
        const des = document.getElementById('description').value

        await fetch('https://todobackend4.herokuapp.com/todo/todos_list').then((res) => {
            console.log(res)
        })
            .catch((e) => { console.warn(e.message)})

       this.props.history.push('./');
    }

    render(){
        
        return <div>
            <label htmlFor='title'>Title</label>
            <input id='title' type ='text'/>

            <label htmlFor='description'>Description</label>
            <textarea id='description' type ='text' rows='4'></textarea>

            <button onClick={this.handleMember}>Add</button>
        </div>
    }
}

export default withRouter(Add)