import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import pic from './pic.jpg'
function App() {
  return (
    <div className="App" styel={{backgroundImage:`url(${pic.jpg})`}}>
        <LoginPage/>
    </div>
  );
}

export default App;
