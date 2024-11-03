import { BrowserRouter , Navigate , Routes , Route} from 'react-router-dom'
import HomePage from './scenes/homePage';
import login from './scenes/loginPage/login';
import profile from './scenes/profilePage/profile';
import navbar from './scenes/navbar/nav';



function App() {
  return (
    <div className="app">
       <BrowserRouter>
          <Routes>
            <Route path='/' element = {<login/>}/>
            <Route path='/home' element = {<HomePage/>} />
            <Route path='/profile/:userId' element = {<profile/>} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
