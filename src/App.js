import { SimpleGrid, Image, Flex} from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { LaunchList } from './Components/LaunchList'
import { LaunchDetails } from './Components/LaunchDetails'
import Logo from '../src/Assets/Logo.png'

function App() {


   return (
      <div bgColor='red'>

         <SimpleGrid columns={[1, null, 1]} p='0' bgColor='black' justifyContent='center' alignItems='center' w='full' >
            <Flex justifyContent='center' alignItems='center' paddingLeft='10' paddingTop='5'>
               <Image w='sm' justifyContent='center' alignItems='center' src={Logo} alt='Dan Abramov' />
            </Flex>
            <Routes>
               <Route path='SpaceX/launches' element={<LaunchList />} />
               <Route path='/launches/:launchId' element={<LaunchDetails />} />
            </Routes>
         </SimpleGrid>





      </div>
   );

}

export default App;
