import NextAuth, { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { UserService } from '../../../services/user.service';

export interface ISessionUser {
	id: string;
	username: string;
}

const userService = new UserService();

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: 'credentials-provider',
			name: 'Credentials',
			type: 'credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'test@email.com'
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: '*******'
				}
			},
			authorize: async (credentials, req) => {
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
					id: token.id as string,
					email: token.email as string
				}
			};

			return newSession as Session;
		}
	}
});