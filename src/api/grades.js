import apiUrl from '../apiConfig'
import axios from 'axios'

import apiUrl from '../apiConfig'
import axios from 'axios'

//get all grades associated w/ a particular assignment (teacher only). 
export const getAssignmentGrades = (user,assignmentId) => {
    return axios({
        method: 'GET',
		url: `${apiUrl}/gradebook/${assignmentId}/grades/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

//get student's grades (student only)
export const getStudentseGrades = (user) => {
    return axios({
        method: 'GET',
		url: `${apiUrl}/gradebook/mygrades/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

//create grades
export const createGrades = (user, assignmentId, grades) => {
    return axios({
        method: 'POST',
		url: `${apiUrl}/gradebook/${assignmentId}/grades/`,
        data: grades,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}


// retrieve a particular grade associated w/ either teacher-user or student-user. Useful to see feedback field
export const getGrade = (user, gradeId) => {
    return axios({
        method: 'GET',
		url: `${apiUrl}/gradebook/grades/${gradeId}/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

//update a partiuclar grade (teacher only). protected on the backend by filtering by the teacher-user making the request
export const updateAssignment = (user, grade) => {
    return axios({
        method: 'PATCH',
		url: `${apiUrl}/gradebook/grades/${grade.id}/`,
        data: grade,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

//delete a partiuclar grade (teacher only). protected on the backend by filtering by the teacher-user making the request
export const deleteAssignment = (user, gradeId) => {
    return axios({
        method: 'DELETE',
		url: `${apiUrl}/gradebook/grades/${gradeId}/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}