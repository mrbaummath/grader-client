import apiUrl from '../apiConfig'
import axios from 'axios'



export const signUp = (credentials) => {
	return axios({
		method: 'POST',
		url: `${apiUrl}/accounts/signup/`,
		data: credentials
		
	})
}

export const signIn = (credentials) => {
	return axios({
		url: `${apiUrl}/accounts/login/`,
		method: 'POST',
		data: {
			 	username: credentials.username,
				password: credentials.password,
			},
		
	})
}

export const signOut = (user) => {
	return axios({
		url: `${apiUrl}/accounts/logout/`,
		method: 'DELETE',
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}

export const changePassword = (passwords, user) => {
	return axios({
		url: apiUrl + '/change-password',
		method: 'PATCH',
		headers: {
			Authorization: `Token ${user.token}`,
		},
		data: {
			passwords: {
				old: passwords.oldPassword,
				new: passwords.newPassword,
			},
		},
	})
}
