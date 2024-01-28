import Home from "./pages/home/Home"
import Cam from "./components/cam/Cam"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/cam" element={<Home />}></Route>
        <Route path="/cam" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Home />    
      {/* <Cam></Cam> */}
    </>
  )
}

export default App
