
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {
  
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  console.log(input);
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(input.email);

    if (!isValidEmail) {
      alert('Please enter a valid email address.');
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const isValidPassword = passwordRegex.test(input.password);
 
    if (!isValidPassword) {
      alert('Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one digit.');
      return;
    }
    
    // Confirm password validation
    if (input.password !== input.confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
    }
    try {
      const response = await axios.post('/signup', {
        email: input.email,
        password: input.password,
      });

      // clear the input after a succeed sign up
      setInput({
        email: "",
        password: "",
        confirmPassword: "",
      });
     
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error)
    }
    
    
  };


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          id="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={input.confirmPassword}
          onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    
    
    </div>

  )
}

export default Signup