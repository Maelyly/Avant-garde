import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { LoginForm } from '../components/LoginForm';

const Login: NextPage = (props) => {
    return (
        <>
        <Head>
            <title>Avant-Garde</title>
        </Head>
            <Flex
                align={'center'}
                justify={'center'}
                w={'100%'}
                h={'100vh'}
                bg={'gray.600'}
            >
                <LoginForm />
            </Flex>
        </>
    );
};

export default Login;