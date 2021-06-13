import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Todolist from './Components/Todolist'
import './Css/App.css'
import Edit from './Components/Edit'
import AddTodo from './Components/AddTodo'
import View from './Components/View'


class App extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='App'>
        <Switch>

          <Route exact path='/' component={Todolist} />

          <Route path='/todo/:id' component={Edit} />

          <Route exact path='/add' component={AddTodo} />
          
          <Route path='/view/:id' component={View} />

        </Switch>


      </div>
    );
  }
}

export default App;
