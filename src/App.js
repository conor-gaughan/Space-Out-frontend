import './App.css';
import {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import SignupPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'


import { rocketDataAPI } from './services/rocketData'

function App() {
  const [rocketData, setRocketData] = useState([])

  async function getRocketData() {
    const data = await rocketDataAPI()
    setRocketData(data)
    console.log(data)
  }

  useEffect(() => {
    getRocketData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <Switch>
      <main>
        <Route exact path='/' render={props => <HomePage 
        {...props}
        /> } />
        <Route exact path='/dashboard' render={props => <DashboardPage 
        {...props}
        /> } />
        <Route exact path='/signup' render={props => <SignupPage 
        {...props}
        /> } />
        <Route exact path='/Login' render={props => <LoginPage
        {...props}
        /> } />

      </main>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
