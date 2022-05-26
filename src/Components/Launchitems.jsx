import { Text, Flex, Button, Tag } from '@chakra-ui/react'
import { FaPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

export function Launchitems(item) {
    return (
        <Flex key={item.flight_number} bgColor='blue.800' w='90' direction=" column" p='6' borderRadius='2xl' h='auto'>
            <Flex justifyContent='space-between' >
                <Flex direction='column'>
                    <Text fontSize="4xl" color='white'>{item.mission_name}</Text>
                    <Text fontWeight='light' color='white' ><b>Rocket name:</b> {item.rocket.rocket_name}</Text>
                    <Text fontWeight='light' color='white' ><b>Rocket type:</b> {item.rocket.rocket_type}</Text>
                    <Text fontWeight='light' color='white' ><b>Launch year:</b> {item.launch_year}</Text>
                    <Text fontWeight='light' color='white' ><b>Rocket site:</b> {item.launch_site.site_name_long}</Text>
                </Flex>
                <a href={item.links.video_link} target="page_blank"><FaPlayCircle color='white' fontSize='40' /></a>
            </Flex>
            <Flex mt='3' justifyContent='space-between' alignItems='center'>
                <Link to={`/launches/${item.flight_number}`}>
                  <Button w='20' mt='' colorScheme='purple'>Details</Button>
                </Link>
                <Tag colorScheme={item.launch_success ? "green" : "red"} borderRadius='full' p='3'>{item.launch_success ? "Success" : "Failed"}</Tag>
            </Flex>
        </Flex>
    )

}