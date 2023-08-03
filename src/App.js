import logo from './logo.svg';
import './App.css';
import RegisterForm from './Components/RegiterForm';
import { useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import LoginForm from './Components/LoginForm';
import DashBoard from './Components/dashboard';

function App() {
  let [loginForm,setLogin] = useState(false);
  let [page,setPage]  = useState(false)
  return (
    <div className="App">
    {
      page?<DashBoard setPage={setPage} />:
      <Box w='40%' m='auto' borderRadius='md' py='4em' mt='4em' px='1.5em'
      boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
        <Text  as='b' fontSize='2em'>{loginForm?'Login' : 'SignUp'}</Text>
        {
          loginForm?<LoginForm setPage={setPage}/>:<RegisterForm setLogin={setLogin}/>
        }
        
        <Text>or</Text>
        <Text>Have an account? <span style={{color:'blue'}} onClick={()=>setLogin(!loginForm)}>{!loginForm?'Login' : 'SignUp'}</span></Text>
    
    </Box>
    }
    </div>
  );
}

export default App;
