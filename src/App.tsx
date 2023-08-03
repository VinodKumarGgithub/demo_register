import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import RegisterForm from './Components/RegiterForm';
import LoginForm from './Components/LoginForm';
import DashBoard from './Components/dashboard';
import './App.css'
function App() {
  const [loginForm, setLogin] = useState(false);
  const [page, setPage] = useState(false);

  return (
    <div className="App">
      {page ? (
        <DashBoard setPage={setPage} />
      ) : (
        <Box
          w="40%"
          m="auto"
          borderRadius="md"
          py="4em"
          mt="4em"
          px="1.5em"
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        >
          <Text as="b" fontSize="2em">
            {loginForm ? 'Login' : 'SignUp'}
          </Text>
          {loginForm ? (
            <LoginForm setPage={setPage} />
          ) : (
            <RegisterForm setLogin={setLogin} />
          )}

          <Text>or</Text>
          <Text>
            Have an account?{' '}
            <span
              style={{ color: 'blue', cursor: 'pointer' }}
              onClick={() => setLogin(!loginForm)}
            >
              {!loginForm ? 'Login' : 'SignUp'}
            </span>
          </Text>
        </Box>
      )}
    </div>
  );
}

export default App;
