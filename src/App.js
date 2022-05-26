import { SimpleGrid, Image, } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { LaunchList } from './Components/LaunchList'
import { LaunchDetails } from './Components/LaunchDetails'


function App() {


   return (
      <div bgColor='red'>

         <SimpleGrid columns={[1, null, 1]} p='0' bgColor='black' justifyContent='center' alignItems='center' w='full' >
            <Image w='full' src='http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png' alt='Dan Abramov' />
            <Routes>
               <Route path='/' element={<LaunchList />} />
               <Route path='/launches/:launchId' element={<LaunchDetails />} />
            </Routes>
         </SimpleGrid>





      </div>
   );

}

export default App;
