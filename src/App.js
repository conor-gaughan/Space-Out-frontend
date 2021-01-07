import './App.css';
import {useState, useEffect} from 'react'

import NavBar from './components/Nav'
import Footer from './components/Footer'

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
      <Footer />
    </div>
  );
}

export default App;
