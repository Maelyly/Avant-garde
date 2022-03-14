import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { RegisterForm } from '../components/RegisterForm';

const Register: NextPage = (props) => {
    return (
        <Flex
            align={'center'}
            justify={'center'}
            w={'100%'}
            h={'100vh'}
            bg={'gray.600'}
        >
            <RegisterForm />
        </Flex>
    );
};

export default Register;