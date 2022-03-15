import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import AvantLogo from '/public/avant_white.png';

type IRegisterPayload = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export const RegisterForm: React.FC = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isSubmitting
        },
        setError
    } = useForm<IRegisterPayload>();

    const onSubmit = async (data: IRegisterPayload) => {
        if(data.password !== data.passwordConfirm) {
            setError('passwordConfirm', {
                message: 'Password confirmation failed.'
            });
            return;
        }
        const {email, name, password} = data;

        await axios.post('/api/user', {email, name, password});
    };

    return (
        <Flex
            flexDir={'column'}
            align={'center'}
            as={'form'}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Image src={AvantLogo} alt="AvantGard logo" width={'150px'} height={'150px'}/>
            <FormControl>
                <FormLabel color="white">
                    Name
                </FormLabel>
                <Input
                    id='name'
                    placeholder='John Doe'
                    color="white"
                    {...register('name')}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel color="white">
                    Email
                </FormLabel>
                <Input
                    id='email'
                    type={'email'}
                    placeholder='example@hello.com'
                    color="white"
                    {...register('email')}
                />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel color="white">
                    Password
                </FormLabel>
                <Input
                    id='password'
                    type={'password'}
                    placeholder={'Choose a strong password'}
                    color="white"
                    {...register('password')}
                />
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid={!!(errors.passwordConfirm && errors.passwordConfirm.message)}
            >
                <FormLabel color="white">
                    Confirm Password
                </FormLabel>
                <Input
                    id='passwordConfirm'
                    type={'password'}
                    placeholder={'Type your password again'}
                    color="white"
                    {...register('passwordConfirm')}
                />
                <FormErrorMessage>
                    {errors.passwordConfirm && errors.passwordConfirm.message}
                </FormErrorMessage>
            </FormControl>
            <Button mt={4} isLoading={isSubmitting} type='submit'>
                Submit
            </Button>
        </Flex>
    );
};