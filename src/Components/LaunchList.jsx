import * as API from '../Services/Launches.js';
import {Launchitems} from './Launchitems'
import { useState, useEffect, } from 'react'
import { SimpleGrid,} from '@chakra-ui/react'

export function LaunchList (){
    const [data, setData] = useState([]);

    useEffect(() => {
        API.getallLaunches().then(setData);
        
    }, [])

    return(
        <SimpleGrid columns={[1, null, 4]} spacing='40px' w='full' p='9' bgColor='black'>
        {data.map(item =>
          <Launchitems key={item.flight_number} {...item} />

          
        )}
     </SimpleGrid> 
    )
}