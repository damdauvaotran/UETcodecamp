export const setToken = (token) => {
  localStorage.setItem('token', res.token);
};

export const getToken = () => {
  return localStorage.getItem('token');
}

export const isLoggedIn = () => {
  return !!getToken();
}