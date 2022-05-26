import { Text, Flex, SimpleGrid, Button, Tag, Image } from '@chakra-ui/react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { FaPlayCircle } from "react-icons/fa";


function App() {
   const [data, setData] = useState([]);
   const url = 'https://api.spacexdata.com/v3/launches?limit=100&offset=0'

   useEffect(() => {
      axios.get(url)
         .then(res => {
            setData(res.data)
         })
         .catch(err => {
            console.log(err)
         })
   }, [])



   return (
      <div bgColor='red'>
         <SimpleGrid columns={[1, null, 1]}  p='0' bgColor='black' justifyContent='center' alignItems='center' w='full' >
            <Image w='full' src='http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png' alt='Dan Abramov' />
         </SimpleGrid>
         <SimpleGrid columns={[1, null, 4]} spacing='40px' w='full' p='9' bgColor='black'>


            {data.map(item =>
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
                     <Button w='20' mt='' colorScheme='purple'>Details</Button>
                     <Tag colorScheme={item.launch_success ? "green" : "red"} borderRadius='full' p='3'>{item.launch_success ? "Success" : "Failed"}</Tag>

                  </Flex>




               </Flex>






            )}


         </SimpleGrid>






      </div>
   );

}

export default App;
