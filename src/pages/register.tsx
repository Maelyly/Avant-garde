import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { RegisterForm } from '../components/RegisterForm';

const Register: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Create your account</title>
      </Head>
      <Flex
        align={'center'}
        justify={'center'}
        w={'100%'}
        h={'100vh'}
        bg={'gray.600'}
      >
        <RegisterForm />
      </Flex>
    </>
  );
};

export default Register;
