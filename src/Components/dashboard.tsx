import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Center,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

interface DashboardProps {
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard: React.FC<DashboardProps> = ({ setPage }) => {
  const userList = useSelector((state: any) => state.userList);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const filtered = userList.filter((user: any) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [filter, userList]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div>
        <Button
          colorScheme='red'
          alignItems='center'
          ml='80%'
          mt='1em'
          variant='outline'
          onClick={() => setPage(false)}
        >
          Logout
        </Button>
        <Box w='80%' m='auto' my='2em'>
          <label style={{ fontWeight: 'bold', opacity: '0.5' }}>
            Filter by Name :
          </label>
          <Input
            type='text'
            placeholder='Search by user name'
            id='filter'
            value={filter}
            onChange={handleFilterChange}
            w='sm'
            size='md'
            ml='1em'
          />
        </Box>
        <TableContainer
          className='mvt_table'
          w='80%'
          m='auto'
          borderRadius='md'
          py='1em'
          px='1.1em'
        >
          <Table variant='striped' colorScheme='teal'>
            <Thead>
              <Tr>
                <Th>User Name</Th>
                <Th>Email</Th>
                <Th>City</Th>
                <Th>Date of Birth</Th>
                <Th>Pincode</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredUsers.length === 0 ? (
                <Tr>
                  <Td colSpan={5}>No result...!</Td>
                </Tr>
              ) : (
                filteredUsers.map((user, i) => (
                  <Tr key={user.name}>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.city}</Td>
                    <Td>{user.dob}</Td>
                    <Td>{user.pincode}</Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Dashboard;
