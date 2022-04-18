import { Flex, Heading} from '@chakra-ui/react';
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
            <Flex
                align={'top'}
                justify={'center'}
                w={'100%'}
                h={'100vh'}
                bg={'gray.600'}
                direction={'column'}
            >
                <AppBar></AppBar>
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