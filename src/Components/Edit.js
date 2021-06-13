import { Component } from "react";


class Edit extends Component{

    constructor(props){
        super(props)
        this.state ={
            title : '',
            description :'',
            isComplete : ''
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    async handleUpdate(){
        let Id = this.props.match.params.id;
        const title = document.getElementById('title').value
        const des = document.getElementById('description').value

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isComplete: `${this.state.isComplete}` , description : `${des}` ,title : `${title}`})
        };
        fetch(`https://todobackend4.herokuapp.com/todo/edit/${Id}`, requestOptions)
        .then(async response => {
            return response.json()
        })
        .then((msg)=> console.log(msg))
        .catch(error => {
            console.error('There was an error!', error);
        });

       this.props.history.push('/');
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
        <label htmlFor='title'>Title</label>
        <input id='title' type ='text' defaultValue = {this.state.title} onChange={(e)=> this.setState({title : e.target.value})}/>

        <label htmlFor='description'>Description</label>
        <textarea id='description' type ='text' rows='4' defaultValue = {this.state.description}  onChange={(e)=> this.setState({description : e.target.value})}></textarea>

        <button onClick={this.handleUpdate}>Add</button>
    </div>
    }
}

export default Edit