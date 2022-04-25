import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Select } from '@chakra-ui/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

type ICreateCardPayload = {
    name: string;
    resume: string;
    tag: string;
    day: string;
    status: string;
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

    const onSubmit = async (data: ICreateCardPayload) => {

        const date = new Date(data.day);

        data.day = (new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate()
        )).toISOString();

        data.status = 'Incomplete';

        const response = await axios.post('/api/card', data);
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
                <Select
                    id='type'
                    placeholder='Select task type...'
                    bg={'white'}
                    {...register('tag')}
                >
                    <option value='Work' > Work </option>
                    <option value='Study' > Studies </option>
                    <option value='SocialLife' > Social </option>
                    <option value='Health' > Health </option>
                </Select>
                <FormErrorMessage>
                    {errors.tag && errors.tag.message}
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
                    id='resume'
                    placeholder='New task description...'
                    color="white"
                    {...register('resume')}
                />
                <FormErrorMessage>
                    {errors.resume && errors.resume.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel color="white">
                    Date
                </FormLabel>
                <Input
                    type={'date'}
                    color={'white'}
                    {...register('day')}
                />
            </FormControl>
            <Button mt={4} isLoading={isSubmitting} type='submit'>
                Create
            </Button>
        </Flex>
    );
};