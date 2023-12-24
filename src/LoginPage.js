import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { auth } from './firebase'; 

function LoginPage() {
  const [email, setEmail] = useState('');       
  const [password, setPassword] = useState(''); 
  const [loginSuccess, setLoginSuccess] = useState(false); 
  const history = useNavigate(); 

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await auth.signInWithEmailAndPassword(email, password);
          setLoginSuccess(true);
          
          setTimeout(() => {
              history('/add-blog');
          }, 2000);
      } catch (error) {
          console.error(error);
          setLoginSuccess(false);
        
      }
  };

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
              />
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
              />
              <button type="submit">Login</button>
          </form>
          {loginSuccess && <div>Login successful!</div>}
      </div>
  );
}

export default LoginPage;
