//import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import ViewAsset from './ViewAsset';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className='content'>
       {/* <Home /> */}
       {/* <Login /> */}
       <ViewAsset />
     </div>
    </div>
  );
}

export default App;
