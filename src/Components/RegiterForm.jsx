
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
import { registerUser } from '../redux/action';


  let initUser = {
    name:'',
    email:'',
    dob:'',
   city:'',
   pincode:'',
   password:'',
  }




let RegisterForm = ({setLogin}) => {
let [user, setUser]= useState(initUser);
let toast = useToast()
let dispatch = useDispatch()


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


const handleSubmit = () => {

    // age validation
    const selectedDate = user.dob;
    const today = new Date();
    const selected = new Date(selectedDate);
    const age = today.getFullYear() - selected.getFullYear();
    
    if(age<18 || !age){
        handleError('Age Cannot be less then 18!','error')
    return;
    }
    console.log(age,'dfg');
    dispatch(registerUser(user))
    setLogin(true)
}
    return (
        <Box >
            
            <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input type='text' onChange={(e)=>{
                setUser({...user,name:e.target.value})
            }}/>
          </FormControl>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' onChange={(e)=>{
                setUser({...user,email:e.target.value})
            }}/>
          </FormControl>

          <FormControl>
            <FormLabel>DOB</FormLabel>
            <Input type='date' onChange={(e)=>{
                setUser({...user,dob:e.target.value})
            }}/>
          </FormControl>
             
          <FormControl>
            <FormLabel>City</FormLabel>
            <Select placeholder='Select City' onChange={(e)=>{
                setUser({...user,city:e.target.value})
            }}>
            <option value='bengalore'>Bengalore</option>
            <option value='dehli'>Dehli</option>
            <option value='pune'>Pune</option>
          </Select>
          </FormControl>

          <FormControl>
            <FormLabel>PinCode</FormLabel>
            <Input type='number' max='6' onChange={(e)=>{
                setUser({...user,pincode:e.target.value})
            }} />
          </FormControl>
          
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' onChange={(e)=>{
                setUser({...user,password:e.target.value})
            }}/>
          </FormControl>
          <br/>
          <FormControl>
            <Input type='Submit' bg='teal' color='white' onClick={handleSubmit} />
          </FormControl>
    
        </Box>
    )
}

export default RegisterForm;