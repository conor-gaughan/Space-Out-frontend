import { getUser, logout } from './services/userService'

import {useState, useEffect} from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import NavBar from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import SignupPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'


import { rocketDataAPI, crewDataAPI, launchDataAPI, roadsterDataAPI } from './services/APIData'

import './App.css';

function App(props) {
  const [ userState, setUserState ] = useState({
    user: getUser()
  });

  function handleSignUpOrLogin() {
    setUserState({
      user: getUser()
    })
  }

  function handleLogout() {
    // TODO: call logout function from userService
    logout();
    setUserState({ user: null });
    props.history.push('/')
  }

  const [rocketData, setRocketData] = useState([])
  const [crewData, setCrewData] = useState([])
  const [launchData, setLaunchData] = useState([])
  const [roadsterData, setRoadsterData] = useState([])

  async function getRocketData() {
    const data = await rocketDataAPI()
    setRocketData(data)
    console.log('Rocket Data', data)
  }

  async function getCrewData() {
    const data = await crewDataAPI()
    setCrewData(data)
    console.log('Crew Data', data)
  }

  async function getLaunchData() {
    const data = await launchDataAPI()
    setLaunchData(data)
    console.log('Launch Data', data)
  }

  async function getRoadsterData() {
    const data = await roadsterDataAPI()
    setRoadsterData(data)
    console.log('Roadster Data', data)
  }

  useEffect(() => {
    getRocketData();
    getCrewData();
    getLaunchData();
    getRoadsterData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <NavBar handleLogout={handleLogout} user={userState.user} />
      </header>
      <Switch>
      <main>
        <Route exact path='/' render={props => <HomePage 
        {...props}
        /> } />
        <Route exact path='/dashboard' render={props => 
        userState.user ? 
        <DashboardPage /> 
        :
        <Redirect to="/login" />
      } />
        <Route exact path='/signup' render={props => 
        <SignupPage {...props} 
        handleSignupOrLogin={handleSignUpOrLogin}
        /> } />
        <Route exact path='/Login' render={props => 
        <LoginPage {...props} 
        handleSignupOrLogin={handleSignUpOrLogin}
        /> } />

      </main>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
