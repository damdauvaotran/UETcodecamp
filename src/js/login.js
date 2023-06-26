import { login } from './helpers/api.js';
import { setToken } from './helpers/auth.js';

const handleLogin = async (e) => {
  try {
    const userNameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const res = await login(userNameInput.value, passwordInput.value);
    if (res.error) {
      alert(res.error);
    } else {
      setToken(res.token);
    }
    
  } catch (error) {
    alert(error);
  }

}

window.handleLogin = handleLogin;