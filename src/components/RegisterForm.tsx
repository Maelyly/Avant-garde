import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export const RegisterForm: React.FC = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm();

    const onSubmit = async (data: any) => {
        console.log('Hello From Submit:', data);
    };

    return (
        <Flex
            dir={'column'}
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
                    {...register('example')}
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
                    placeholder='********'
                    {...register('password')}
                />
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Button mt={4} isLoading={isSubmitting} type='submit'>
                Submit
            </Button>
        </Flex>
    );
};