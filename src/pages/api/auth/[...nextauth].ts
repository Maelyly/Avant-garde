import NextAuth, { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { UserService } from '../../../services/user.service';

const userService = new UserService();

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: 'credentials-provider',
			name: 'Credentials',
			type: 'credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
					placeholder: 'test@email.com'
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: '*******'
				}
			},
			authorize: async (credentials) => {
				const email = credentials?.email;
				const password = credentials?.password;

				if(!email || !password) return null;

				const user = await userService.authenticate({email, password});

				return user;
			}
		}),
	],
	secret: 'topsecret',
	callbacks: {
		jwt: async ({token, user}) => {
			const newToken = {...token, ...user};
			return newToken;
		},
		session: async (params) => {

			let session = params.session;
			let token = params.token;

			let newSession = {
				...session,
				user: {
					id: token.id as number,
          email: token.email as string,
          name: token.name as string,
				}
			};

			return newSession as Session;
		}
	}
});