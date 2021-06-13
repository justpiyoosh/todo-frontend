import { Component } from "react";
import '../Css/Todolist.css';
import { withRouter } from 'react-router-dom'


class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            isLoading: true
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.fatchData = this.fetchData.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    async fetchData(){
        await fetch('https://todobackend4.herokuapp.com/todo/todos_list').then((res) => {
            this.setState({ isLoading: false})
            return res.json()
        })
            .then((data) => {
                
                const sortedArray = [...data].sort((a,b)=>{return a.id - b.id})

                this.setState({  response: sortedArray })
            })
            .catch((e) => { console.warn(e.message)})
    }

    async handleComplete(e){
        let Id = e.target.id.split('-')[0]

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isComplete: `${e.target.checked}` , description : `helloe there` ,title : `afffjal`})
        };
        fetch(`https://todobackend4.herokuapp.com/todo/edit/${Id}`, requestOptions)
        .then(async response => {
            return response.json()
        })
        .then((msg)=> console.log(msg))
        .catch(error => {
            console.error('There was an error!', error);
        });

        // this.fetchData();
    }


    async handleDelete(e){
        await fetch(`https://todobackend4.herokuapp.com/todo/delete/${e.target.id}`, { method: 'DELETE' })
        .then(() => console.log('deleted'));

        this.fetchData();
    }


    componentDidMount = () => {
        this.fetchData();
    }

    render() {
        if (this.state.isLoading)
            return <div className='App'>Loading....</div>

        else
            return <div className='Todo_block'>
                <h1>Todolist</h1>
                <hr />
                {this.state.response.map((ele) => {
                    return <div key ={ele.id}>

                        {ele.isComplete === 'true' ? 
                            <input id={`${ele.id}-input`} type='checkbox' defaultChecked={true} onClick={this.handleComplete} />:
                            <input id={`${ele.id}-input`} type='checkbox' onClick={this.handleComplete} />
                        }
                        

                        <h2 className='Todo_title' onClick={() => {
                            this.props.history.push('/edit')
                        }}>{ele.title}
                        </h2>

                        <button className='Todo_delete' id={ele.id} onClick={this.handleDelete}>
                            delete
                        </button>
                    </div>
                })}
            </div>
    }
}

export default withRouter(Todolist);