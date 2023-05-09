import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [current,setCurrent] = useState(0);
  return (
    <div className="App">
        <div className='container'>

            <div className='login-sign-up-option'>
              <div onClick={()=>{
                setCurrent(0);
                let option1 = document.querySelector('.login-option');
                let option2 = document.querySelector('.sign-up-option');
                if(option1.classList.contains('current'))
                {
                  return;
                }
                option1.classList.toggle('current') 
                option2.classList.toggle('current') 
              }} className='login-option option current'>
                Log In
              </div>
              <div onClick={()=>{
                setCurrent(1);
                let option1 = document.querySelector('.login-option');
                let option2 = document.querySelector('.sign-up-option');
                if(option2.classList.contains('current'))
                {
                  return;
                }
                option1.classList.toggle('current') 
                option2.classList.toggle('current') 
              }} className='sign-up-option option'>
                Sign Up
              </div>
            </div>
            {current===0?<Login current={current}setCurrent={setCurrent}/>:<Signup current={current}setCurrent={setCurrent}/>}
        </div>
    </div>
  );
}

export default App;
