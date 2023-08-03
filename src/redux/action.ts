export const registerUser = (user: any) => ({
  type: 'REGISTER_USER',
  payload: user,
});

export const setSearchQuery = (query: string) => ({
  type: 'SET_SEARCH_QUERY',
  payload: query,
});

export const loginUser = (credentials: any) => ({
  type: 'LOGIN_USER',
  payload: credentials,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
