import Header  from "./components/Header"
import Cart  from "./components/Cart"
import Home  from "./components/Home"
import { BrowserRouter ,
  Routes,
  Route} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
     
    
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/Cart" element={<Cart/>} />

    </Routes>
    
    </BrowserRouter>
   
    
    
    </>);
}

export default App;
