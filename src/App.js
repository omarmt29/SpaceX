import { Text, Flex, SimpleGrid, Button, Tag, Link } from '@chakra-ui/react'
import axios from 'axios';
import { useState, useEffect } from 'react'


function App() {
   const [data, setData] = useState([]);
   const url = 'https://api.spacexdata.com/v3/launches?limit=6&offset=0'

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
      <div bgColor='black.500'>
         <SimpleGrid columns={[2, null, 3]} spacing='40px' p='5'>

            {data.map(item =>
               <Flex key={item.flight_number} bgColor='blue.800' w='90' p={4} direction=" column" p='6' borderRadius='2xl'>


                  <Flex  justifyContent='space-between' >
                     <Flex direction='column'>
                        <Text fontSize="3xl">{item.mission_name}</Text>
                        <Text ><b>Rocket name:</b> {item.rocket.rocket_name}</Text>
                        <Text ><b>Rocket type:</b> {item.rocket.rocket_type}</Text>
                        <Text ><b>Launch year:</b> {item.launch_year}</Text>
                        <Text ><b>Rocket site:</b> {item.launch_site.site_name_long}</Text>
                     </Flex>
                     <Link href={item.links.video_link} target='page_blank' w='40' fontStyle='none' textDecoration='none' bgColor="red.700" borderRadius="full" mt='4' textAlign="center" h='6'>Watch video</Link>

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
