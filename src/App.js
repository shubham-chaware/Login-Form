import logo from './logo.svg';
import './App.css';
import LoginForm from './componuts/asstets/LoginForm/LoginForm';

function App() {
 
  return (
    <div className='wrapper'>
     <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder='Username' required />
      </div>
      <div className="input-box">
        <input type="password" placeholder='Password' required />
      </div>


      <div className="remember-forget">
        <label> <input type ="checkbox" />Remember me</label>
        <a href="#">Forget Password?</a>
      </div>

      <button type='submit'>Login</button>

      <div className='registor-link'>
        <p>Don't have an account <a href="#">Registor</a></p>
      </div>
     </form>
    </div>
  );
}

export default App;
