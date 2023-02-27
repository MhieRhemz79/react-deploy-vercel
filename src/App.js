import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignIn from './component/sign_in';
import SignUp from './component/signup';
import Welcome from './component/welcome';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    
    <>   
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>    
    </>
  );
}

export default App;
