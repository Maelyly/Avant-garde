import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { RegisterForm } from '../components/RegisterForm';

const Register: NextPage = (props) => {
    return (
        <Flex
            align={'center'}
            justify={'center'}
            w={'full'}
            h={'full'}
        >
            <RegisterForm />
        </Flex>
    );
};

export default Register;