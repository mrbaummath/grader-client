import apiUrl from '../apiConfig'
import axios from 'axios'

export const getCourseGradesByStudent = (user, courseId) => {
    return axios({
        method: 'GET',
		url: `${apiUrl}/gradebook/courses/${courseId}/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}