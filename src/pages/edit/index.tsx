import { GetServerSideProps } from 'next';

export default function redirecter() {
    return <></>;
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: '/',
            permanent: false
        }
    };
};