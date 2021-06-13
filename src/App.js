import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
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
              <Route exact path='/' render={() => {
                return <Todolist  />
              }} />

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
