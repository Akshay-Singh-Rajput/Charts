import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";



export const Chart = () => {
    const data = useSelector(store => store.storeData);
    console.log(data.codingOne, 'data');

    const navigate = useNavigate();


    const evaluation = [ 'Sprint1', 'Sprint2', 'Sprint3', 'Sprint4', 'UnitEv' ];
    const [ userData, setUserData ] = useState({
        labels: evaluation.map((data) => data),
        datasets: [
            {
                label: "Coding Score",
                data: [ data.codingOne, data.codingTwo, data.codingThree, data.codingFour ],
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "green",
                borderWidth: 2,
            },
            {
                label: "DSA score",
                data: [ data.dsaOne, data.dsaTwo, data.dsaThree, data.dsaFour, data.unitEv ],
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "blue",
                borderWidth: 2,
            },
        ],
    });

    return (
        <Box>
            <Text margin='30px' fontSize='3xl'>{ data.stName }</Text>

            <Flex justifyContent='space-around'>
                <Box width='600px' border='1px solid silver'>
                    <BarChart chartData={ userData } />
                    <Text margin='30px' fontSize='3xl'>Bar Chart</Text>
                </Box>
                <Box width='600px' border='1px solid silver'>
                    <LineChart chartData={ userData } />
                    <Text margin='30px' fontSize='3xl'>Line Chart</Text>
                </Box>
            </Flex>
            <Button margin='20px' bg='teal' color='white' onClick={ () => { navigate('/'); } }>Get another report</Button>
        </Box>
    );
};
