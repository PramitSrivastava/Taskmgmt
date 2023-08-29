import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import { AllUsers } from "./components/AllUsers";
import EditUser from "./components/EditUser";
import {BrowserRouter ,Route , Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/add" element={ <AddUser />}/>
      <Route path="/all" element={ <AllUsers />}/>
      <Route path="/edit/:id" element={ <EditUser />}/>
      
      
     
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
