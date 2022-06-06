import { useParams } from "react-router-dom"
import { useState, useEffect, } from "react"
import * as API from "../Services/Launches.js";
import { Text, Flex, Box, Button, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function LaunchDetails() {

    const [launch, setLaunch] = useState([]);
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchById(launchId).then(setLaunch);

    }, [launchId])

    return (

        <SimpleGrid columns={[1, null, 1]} spacing='40px' w='full' p='9' bgColor='black' justifyContent='center' alignItems='center'>


            <Box bgColor='black'>
                <Flex bgColor='blue.800' justifyContent='center' alignItems='center' direction=" column" p='6' h='auto'>
                    <Text color='white' fontSize='xl'>Details</Text>
                    <Text color='white' textAlign='center' p='10'>{launch.details = null ? 'Not found' : launch.details}</Text>
                    <Link to='/SpaceX'>
                        <Button w='20' mt='' colorScheme='purple'>Back</Button>
                    </Link>
                </Flex>




            </Box>

        </SimpleGrid>


    )
}