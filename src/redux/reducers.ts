interface User {
  name: string;
  email: string;
  // Add more properties if needed
}

interface State {
  userList: User[];
  searchQuery: string;
  loggedInUser: any; // Adjust the type according to your needs
}

const initialState: State = {
  userList: [],
  searchQuery: '',
  loggedInUser: null,
};

const reducer = (state = initialState, action: any): State => {
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
