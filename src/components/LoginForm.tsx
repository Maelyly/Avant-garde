import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import AvantLogo from '/public/avant_white.png';

type ILoginPayload = {
    email: string;
    password: string;
}

export const LoginForm: React.FC = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isSubmitting
        },
        setError
    } = useForm<ILoginPayload>();

    const history = useRouter();

    const onSubmit = async (data: ILoginPayload) => {
        const {email, password} = data;

        const user = await signIn('credentials-provider', {redirect: false, ...data});

        history.push('/');
    };

    return (
        <Flex
            flexDir={'column'}
            align={'center'}
            as={'form'}
            onSubmit={handleSubmit(onSubmit)}
            w={'sm'}
        >
            <Image src={AvantLogo} alt="AvantGard logo" width={'150px'} height={'150px'}/>
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
                    placeholder={'********'}
                    color="white"
                    {...register('password')}
                />
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Flex align={'center'} justify={'space-around'} w={'full'} mt={'4'}>
                <Button isLoading={isSubmitting} type='submit'>
                    Login
                </Button>
                <Link href={'/register'} passHref={true}>
                    <Button>
                        {"I don't have an account"}
                    </Button>
                </Link>
            </Flex>
        </Flex>
    );
};