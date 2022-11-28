import apiUrl from '../apiConfig'
import axios from 'axios'

//in theory, the backend API is set up to only return courses associated with the user 
export const getMyCourses = (user) => {
	return axios({
		method: 'GET',
		url: `${apiUrl}/courses/teacher/${user.id}`,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}