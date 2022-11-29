import apiUrl from '../apiConfig'
import axios from 'axios'

//get all assignments associated w/ a particular course (teacher only). On the backend, this is protected by first filtering assignments by the teacher-user making the request 
export const getCourseAssignments = (user,courseId) => {
    return axios({
        method: 'GET',
		url: `${apiUrl}/gradebook/${courseId}/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

//get all assignments from a student 
export const getStudentseAssignments = (user) => {
    return axios({
        method: 'GET',
		url: `${apiUrl}/gradebook/assignments/students`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

//create an assignment for a course (teacher only). The backend is configured to take the courseId and automatically add it to the course field. 
export const createAssignment = (user, courseId, assignment) => {
    return axios({
        method: 'POST',
		url: `${apiUrl}/gradebook/${courseId}/`,
        data: assignment,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}


// retrieve a particular assignment (teacher only). protected on the backend by filtering by the teacher-user making the request
export const getAssignment = (user, assignmentId) => {
    return axios({
        method: 'GET',
		url: `${apiUrl}/gradebook/assignments/${assignmentId}/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

//update a partiuclar assignment (teacher only). protected on the backend by filtering by the teacher-user making the request
export const updateAssignment = (user, assignment) => {
    return axios({
        method: 'PATCH',
		url: `${apiUrl}/gradebook/assignments/${assignment.id}/`,
        data: assignment,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

//delete a partiuclar assignment (teacher only). protected on the backend by filtering by the teacher-user making the request
export const deleteAssignment = (user, assignmentId) => {
    return axios({
        method: 'DELETE',
		url: `${apiUrl}/gradebook/assignments/${assignmentId}/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}


