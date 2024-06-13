
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import {BrowserRouter,Routes,Route} from "react-router-dom"

// Accordion
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path = "/" element = {<Home />}/>
  <Route path = "/Contact" element = {<Contact />}/>
  <Route path = "/Service" element = {<Service />} />
</Routes>
</BrowserRouter>
  )
}

export default App;
