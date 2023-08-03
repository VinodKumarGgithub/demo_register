
export const registerUser = (user) => ({
    type: 'REGISTER_USER',
    payload: user,
  });
  
  export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
  });
  

  // login
export const loginUser = (credentials) => ({
  type: 'LOGIN_USER',
  payload: credentials,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
