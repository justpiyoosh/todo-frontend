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

    }

    componentDidMount = async () => {
        await fetch('https://todobackend4.herokuapp.com/todo/todos_list').then((res) => {

            this.setState({
                isLoading: false
            })
            return res.json()

        })
            .then((data) => {
                this.setState({
                    response: data
                })
            })
            .catch((e) => {
                console.warn(e.message)
            })
    }

    render() {
        const data = ["title1", "title2", "title3"];
        if (this.state.isLoading)
            return <div className='App'>Loading....</div>

        else
            return <div >
                <h1>Todolist</h1>
                <hr />
                {this.state.response.map((ele) => {
                    return <div
                        key ={ele.id}
                        onClick={() => {
                            this.props.history.push('/edit')
                        }}>
                        <input type='checkbox'/>
                        <h2>{ele.title}</h2>
                        <button>delete</button>
                        
                    </div>
                })}

            </div>
    }
}

export default withRouter(Todolist);