import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Select } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import AvantLogo from '/public/avant_white.png';

type ICreateCardPayload = {
    name: string;
    description: string;
    type: string;
}

export const CreateForm: React.FC = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isSubmitting
        },
        setError
    } = useForm<ICreateCardPayload>();

    const history = useRouter();

    const onSubmit = async (data: ICreateCardPayload) => {
    };

    return (
        <Flex
            paddingLeft={'70px'}
            w={'95%'}
            flexDir={'column'}
            align={'center'}
            as={'form'}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormControl>
                <FormLabel color="white">
                    Task Type
                </FormLabel>
                <Select id='type' placeholder='Select task type...'  bg={'white'}>
                    <option value='Work' > Work </option>
                    <option value='Studies' > Studies </option>
                    <option value='Social' > Social </option>
                </Select>
                <FormErrorMessage>
                    {errors.type && errors.type.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel color="white">
                    Name
                </FormLabel>
                <Input
                    id='name'
                    placeholder='New task name...'
                    color="white"
                    {...register('name')}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel color="white">
                    Description
                </FormLabel>
                <Input
                    id='description'
                    placeholder='New task description...'
                    color="white"
                    {...register('description')}
                />
                <FormErrorMessage>
                    {errors.description && errors.description.message}
                </FormErrorMessage>
            </FormControl>
            <Button mt={4} isLoading={isSubmitting} type='submit'>
                Create
            </Button>
        </Flex>
    );
};