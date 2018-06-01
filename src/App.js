import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import QuizzDetails from './containers/QuizzDetails'
import QuizPage from './components/QuizPage'
import HomePageTeacher from './components/homepageTeacher'
import Topbar from './components/Topbar'
import GetScore from './components/GetScore'

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav>
            <Topbar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/quizzes" component={HomePageTeacher} />
            <Route exact path="/quizzes/:id" component={QuizPage} />
            <Route exact path="/quizzes/edit/:id" component={QuizzDetails} />
            <Route exact path="/scores/" component={GetScore}/>
            <Route exact path="/" render={ () => <Redirect to="/login" /> } />

          </main>
        </div>
      </Router>
    )
  }
}


export default App;
