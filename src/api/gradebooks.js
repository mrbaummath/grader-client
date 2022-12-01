import apiUrl from '../apiConfig'
import axios from 'axios'

//get grades for a course to populate data table
export const getCourseGradesByStudent = (user, courseId) => {
    return axios({
        method: 'GET',
		url: `${apiUrl}/gradebook/courses/${courseId}/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

export const updateGradesFromTable = (user, gradeUpdates) => {
    return axios({
        method: 'PATCH',
		url: `${apiUrl}/gradebook/grades/updatemany/`,
        data: {
            update_pairs: gradeUpdates
        },
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}