import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/action';

interface LoginFormProps {
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setPage }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const toast = useToast();
  const userList = useSelector((state: any) => state.userList);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let c = 0;
    userList.forEach((ele: any) => {
      if (ele.email === user.email && ele.password === user.password) {
        dispatch(loginUser(user));
        c++;
        handleError('Login Successful', 'success');
        setPage(true);
        return;
      }
    });
    if (c === 0) {
      handleError('Invalid Credentials', 'error');
    }
  };

  const handleError = (title: string, status: 'success' | 'error') => {
    toast({
      title: title,
      status: status,
      isClosable: true,
      position: 'top-right',
      duration: 4000,
    });
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        onChange={handlePasswordChange}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
      </FormControl>

      <br />

      <Button
        type='submit'
        bg='teal'
        color='white'
        onClick={handleLogin}
      >
        Log in
      </Button>
    </Box>
  );
};

export default LoginForm;
