import { Component } from "react";


class View extends Component{
    constructor(props){
        super(props)
        this.state ={
            title : '',
            des : '',
            isComplete : ''
        }
    }


    async componentDidMount(){
        let Id = this.props.match.params.id;
 
        await fetch(`https://todobackend4.herokuapp.com/todo/detail/${Id}`).then((res) => {
            return res.json()
        })
            .then((data) => {

                this.setState({  title: data.title , description : data.description, isComplete : data.isComplete})
            })
            .catch((e) => { console.warn(e.message)})
    }

    render(){
        return <div>
            
            <h2>Title : <span style={{color : "white"}}> {this.state.title}</span></h2>
            
            <h3>Description : <span style={{color : "white"}}>{this.state.description}</span></h3>

             
        </div>
    }
}

export default View