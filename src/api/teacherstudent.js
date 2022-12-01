import apiUrl from '../apiConfig'
import axios from 'axios'

//call to be used by a teacher creating a student w/o creting an associated user
export const createStudent = (student, user) => {
    return axios({
        method: 'POST',
		url: `${apiUrl}/accounts/students/`,
        data: student,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}

//get all students (whether user or not) --> will be used to help teacher add a student if the student already exists in the system
export const getAllStudents = (user) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/accounts/students/`,
        headers: {
			Authorization: `Token ${user.token}`
		}
    })
}