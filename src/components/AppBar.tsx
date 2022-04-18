import { Button, Flex, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Home from '../pages';
import AvantLogo from '/public/avant_white.png';
import { signOut } from 'next-auth/react';

export const AppBar: React.FC = () => {

    return (
        <Flex
        position={'absolute'}
        top={'0'}
        flexDir={'row'}
        align={'top'}
        justify={'left'}
        h={'70px'}
        w={'100%'}
        bg={'blue.900'}
        >
            <HStack spacing={'40px'}>
                <Image src={AvantLogo} alt="AvantGard logo" width={'70px'} height={'70px'}/>
                <Link href={'/'}>
                    <Button bg='blue.900' color='white' border='0px' h='70px' borderRadius={'0'} _hover={{bg: '#173685'}}>Home</Button>
                </Link>
                <Link href={'/create'}>
                <Button bg='blue.900' color='white' border='0px' h='70px' borderRadius={'0'} _hover={{bg: '#173685'}}>Create Task</Button>                
                </Link>
                <Button bg='blue.900' color='white' border='0px' h='70px' borderRadius={'0'} _hover={{bg: '#173685'}}>Task List</Button>
                <Button bg='blue.900' color='white' border='0px' h='70px' borderRadius={'0'} _hover={{bg: '#173685'}} onClick={() => {signOut();}}>Logout</Button>
            </HStack>    
        </Flex>
    );
};