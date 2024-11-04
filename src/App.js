import './App.css';
import Portfolio from './Portfolio';
import ProjectDetail from './ProjectDetail';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>

<Routes>
<Route exact path='/' element={<Portfolio/>} />
<Route exact path='/:id' element={<ProjectDetail/>} />

</Routes>
  
    </div>
  );
}

export default App;
