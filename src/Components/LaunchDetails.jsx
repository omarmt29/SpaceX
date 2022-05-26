import { useParams } from "react-router-dom"
import { useState, useEffect, } from "react"
import * as API from "../Services/Launches.js";
import { Text, Flex, Box, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

export function LaunchDetails() {

    const [launch, setLaunch] = useState([]);
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchById(launchId).then(setLaunch);

    }, [launchId])

    return (
        <Box bgColor='black'>
            <Flex bgColor='blue.800' justifyContent='center' alignItems='center' direction=" column" p='6'  h='auto'>
                <Text fontSize='xl'>Details</Text>
                <Text textAlign='center' p='10'>{launch.details}</Text>
                <Link to='/'>
                  <Button w='20' mt='' colorScheme='purple'>Back</Button>
                </Link>
            </Flex>




        </Box>

    )
}