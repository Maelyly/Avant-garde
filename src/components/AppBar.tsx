import { Button, Flex, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import AvantLogo from '/public/avant_white.png';

export const AppBar: React.FC = () => {

    return (
        <Flex
        flexDir={'row'}
        align={'top'}
        justify={'left'}
        h={'70px'}
        w={'100%'}
        bg={'blue.900'}
        >
            <HStack spacing={'40px'}>
                <Image src={AvantLogo} alt="AvantGard logo" width={'70px'} height={'70px'}/>
                <Button bg='blue.900' color='white' border='0px' h='70px' borderRadius={'0'} _hover={{bg: '#173685'}}>Página Inicial</Button>
                <Button bg='blue.900' color='white' border='0px' h='70px' borderRadius={'0'} _hover={{bg: '#173685'}}>Atividades do Dia</Button>
                <Button bg='blue.900' color='white' border='0px' h='70px' borderRadius={'0'} _hover={{bg: '#173685'}}>Lista de Atividades</Button>
                <Button bg='blue.900' color='white' border='0px' h='70px' borderRadius={'0'} _hover={{bg: '#173685'}}>Logout</Button>
            </HStack>
            
        </Flex>
    );
};