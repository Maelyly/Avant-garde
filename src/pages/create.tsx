import { Flex, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { AppBar } from '../components/AppBar';
import { CreateForm } from '../components/CreateForm';

const CreateCard: NextPage = (props) => {
    return (
        <>
        <Head>
            <title>Avant-Garde</title>
        </Head>
            <AppBar />
            <Flex
                align={'top'}
                justify={'center'}
                w={'100%'}
                h={'calc(100vh - 70px)'}
                bg={'gray.600'}
                direction={'column'}
            >
                <Flex
                align={'center'}
                justify={'left'}
                w={'100%'}
                h={'20%'}
                >
                    <Heading paddingLeft={'40px'} color={'white'}> Create new task </Heading>
                </Flex>
                <Flex
                align={'flex-start'}
                w={'100%'}
                h={'65%'}
                direction={'column'}
                >
                    <CreateForm> </CreateForm>
                </Flex>
            </Flex>
        </>
    );
};

export default CreateCard;