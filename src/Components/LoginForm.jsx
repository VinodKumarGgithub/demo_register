
import { Box, Input } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Text,
    useToast
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/action';

let LoginForm = ({setPage}) => {
    let [user, setUser]= useState({});
      const dispatch = useDispatch();
      let toast = useToast()
let userList = useSelector((state)=>state.userList) 

      const handleLogin = (e) => {
        e.preventDefault();
        let c=0;
        userList.map((ele)=>{
        if(ele.email==user.email&&ele.password==user.password){
            dispatch(loginUser(user));
            c++;
            handleError('Login Succefull','success')
            setPage(true)
          return;
        }
      })
     c==0&& handleError('Invalid Credentials','error')
      };

// Erorr Popup
const handleError = (title,status) => {
    toast({
        title: `${title}`,
        status: status,
        isClosable: true,
        position: 'top-right',
        duration: 4000,
      })
}
    
    return (
        <Box >

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email'  onChange={(e)=>{
                setUser({...user,email:e.target.value})
            }}/>
          </FormControl>
     

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' onChange={(e)=>{
                setUser({...user,password:e.target.value})
            }}/>
          </FormControl>
          <br/>
          <FormControl>
            <Input type='Submit' bg='teal' color='white' onClick={handleLogin}  />
          </FormControl>

        </Box>
    )
}

export default LoginForm;