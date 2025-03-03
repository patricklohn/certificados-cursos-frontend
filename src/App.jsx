import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
        <div className='App'>
          <h1>Certificados</h1>
          <div className='container'>
            <Outlet/>
          </div>
        </div>
  )
}

export default App
