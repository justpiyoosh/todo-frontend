import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Todolist from './Components/Todolist'
import './Css/App.css'
import Edit from './Components/Edit'
import Add from './Components/Add'


class App extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            return <Todolist />
          }} />

          <Route path='/todo/:id' component={Edit} />
          <Route exact path='/add' component={Add} />

        </Switch>


      </div>
    );
  }
}

export default App;
