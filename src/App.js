import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Add from './Components/Add'
import Todolist from './Components/Todolist'
import './Css/App.css'


class App extends Component {

  constructor(props) {
    super(props)
  }


  render() {
      return (
        <div className='App'>
          <Switch>
            <div className='Todo_block'>
              <Route exact path='/' render={() => {
                return (
                  <div>
                    <Todolist  />
                    <Add />
                  </div>)
              }} />
            </div>

            <Route path='/edit' render={() => {
              return <div >
                edit page
          </div>
            }
            } />
          </Switch>


        </div>
      );
  }
}

export default App;
