import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Button,  
  InputGroup,
  InputRightElement,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/action';
import PasswordInput from './PasswordInput';

interface User {
  name: string;
  email: string;
  dob: string;
  city: string;
  pincode: string;
  password: string;
}

interface RegisterFormProps {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ setLogin }) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    dob: '',
    city: '',
    pincode: '',
    password: '',
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleSubmit = () => {
    const selectedDate = user.dob;
    const today = new Date();
    const selected = new Date(selectedDate);
    const age = today.getFullYear() - selected.getFullYear();

    if (age < 18 || !age) {
      handleError('Age Cannot be less than 18!', 'error');
      return;
    }

    dispatch(registerUser(user));
    setLogin(true);
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
        <FormLabel>Full Name</FormLabel>
        <Input
          type='text'
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type='email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>DOB</FormLabel>
        <Input
          type='date'
          onChange={(e) => setUser({ ...user, dob: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>City</FormLabel>
        <Select
          placeholder='Select City'
          onChange={(e) => setUser({ ...user, city: e.target.value })}
        >
          <option value='bengalore'>Bengalore</option>
          <option value='delhi'>Delhi</option>
          <option value='pune'>Pune</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>PinCode</FormLabel>
        <Input
          type='number'
          max={6}
          onChange={(e) => setUser({ ...user, pincode: e.target.value })}
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
        type='button'
        bg='teal'
        color='white'
        onClick={handleSubmit}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
