import React, {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/auth/login', {email, password});
        } catch (error) {

        }
    };

    return (
        <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
              <button type="submit">Login</button>
            </form>
          );
}
export default RegisterForm;