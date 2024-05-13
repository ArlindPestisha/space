import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Technology from './components/Technology';

const App = () => {
  

  return (
    <Router>
      <Routes>
       <Route  path='/' element={<Home />} />
       <Route  path='/technology' element={<Technology />} />
      </Routes>
       
      
    </Router>
    
  )
}

export default App
