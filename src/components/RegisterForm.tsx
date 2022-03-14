import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

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
        }
        console.log('data:', data);
    };

    return (
        <Flex
            flexDir={'column'}
            align={'center'}
            as={'form'}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormControl>
                <FormLabel>
                    Name
                </FormLabel>
                <Input
                    id='name'
                    placeholder='John Doe'
                    {...register('name')}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>
                    Email
                </FormLabel>
                <Input
                    id='email'
                    type={'email'}
                    placeholder='example@hello.com'
                    {...register('email')}
                />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>
                    Password
                </FormLabel>
                <Input
                    id='password'
                    type={'password'}
                    placeholder={'Choose a strong password'}
                    {...register('password')}
                />
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid={!!(errors.passwordConfirm && errors.passwordConfirm.message)}
            >
                <FormLabel>
                    Confirm Password
                </FormLabel>
                <Input
                    id='passwordConfirm'
                    type={'password'}
                    placeholder={'Type your password again'}
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