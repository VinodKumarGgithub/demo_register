import React, { useState, ChangeEvent } from 'react';
import {
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from '@chakra-ui/react';

interface User {
  password: string;
  // Add other properties related to the user if needed
}

interface PasswordInputProps {
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
}

function PasswordInput({ setUser, user }: PasswordInputProps): JSX.Element {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
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
  );
}

export default PasswordInput;
