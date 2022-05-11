import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
  Button,
  Text
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addScoreData } from '../../Redux/action';
import { useNavigate } from 'react-router-dom';


export const GetData = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch()
  const [ formData, setForm ] = useState({
    stName : "",
    codingOne: '',
    codingTwo: '',
    codingThree: '',
    codingFour: '',
    dsaOne : '',
    dsaTwo: '',
    dsaThree: '',
    dsaFour: '',
    unitEv: '',
  });

  const handleChange = (e) => {
    console.log(e.target.value)
    const { id, value } = e.target;
    setForm({
      ...formData,
      [ id ]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(addScoreData(formData))
    console.log(formData,'formData');
    navigate('/chart')
  };

  return (
    <Box>
      <FormControl width='40%' margin='2% auto' >
        <Text fontSize='3xl'>Fill Your Evaluations Score</Text>
        <Flex justifyContent='space-between' boxShadow='2xl' p='6' rounded='md' bg='white'>
          <Box m="20px">
            <FormLabel >Student Name/Code</FormLabel>
            <Input id='stName' type='text' onChange={ handleChange } />
        <FormLabel >Coding 1</FormLabel>
        <Input id='codingOne' type='number' onChange={ handleChange } />
        <FormLabel >Coding 2</FormLabel>
        <Input id='codingTwo' type='number' onChange={ handleChange } />
        <FormLabel >Coding 3</FormLabel>
        <Input id='codingThree' type='number' onChange={ handleChange } />
        <FormLabel >Coding 4</FormLabel>
        <Input id='codingFour' type='number' onChange={ handleChange } />
        </Box>
          
        <Box m="20px">
        <FormLabel >DSA 1</FormLabel>
        <Input id='dsaOne' type='number' onChange={ handleChange } />
        <FormLabel >DSA 2</FormLabel>
        <Input id='dsaTwo' type='number' onChange={ handleChange } />
        <FormLabel >DSA 3</FormLabel>
        <Input id='dsaThree' type='number' onChange={ handleChange } />
        <FormLabel >DSA 4</FormLabel>
        <Input id='dsaFour' type='number' onChange={ handleChange } />
        <FormLabel >Unit Evaluation</FormLabel>
        <Input id='unitEv' type='number' onChange={ handleChange } />
        </Box>
        </Flex>
        <Button width='50%' margin='20px' bg='teal' color='white' onClick={ handleSubmit } >Submit</Button>
        <FormHelperText>This app is under development. Adding more features soon</FormHelperText >
      </FormControl>
    </Box>
  );
};
