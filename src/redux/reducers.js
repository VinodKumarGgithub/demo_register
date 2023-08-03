// reducers.js
const initialState = {
    userList: [],
    searchQuery: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          userList: [...state.userList, action.payload],
        };
      case 'SET_SEARCH_QUERY':
        return {
          ...state,
          searchQuery: action.payload,
        };
     case 'LOGIN_USER':
      
      return {
        ...state,
        loggedInUser: action.payload,
      };
    
    case 'LOGOUT_USER':
      return {
        ...state,
        loggedInUser: null,
      };
      default:
        return state;
    }
  };
  
  export default reducer;
  