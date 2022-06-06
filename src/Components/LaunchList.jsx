import * as API from '../Services/Launches.js';
import { Launchitems } from './Launchitems'
import { useState, useEffect, } from 'react'
import { SimpleGrid, Text, Flex } from '@chakra-ui/react'


export function LaunchList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.getallLaunches().then(setData);
        setLoading(false);

    }, [])

    return (
        <>
            {loading ? <Flex flexWrap='wrap' justifyContent='center' alignItems='center' w='full'> <Text color='white' fontWeight='bold'>LOADING..</Text></Flex> :
                <SimpleGrid columns={[1, null, 4]} spacing='40px' w='full' p='9' bgColor='black'>
                       {data.map(item =>
                          <Launchitems key={item.flight_number} {...item} /> )}
                </SimpleGrid>}

        </>
    )


    // {loading ? <SimpleGrid columns={[1, null, 4]} spacing='40px' w='full' p='9' bgColor='black'>

    //             {data.map(item =>
    //                 <Launchitems key={item.flight_number} {...item} />


    //             )}
    //         </SimpleGrid>}
}