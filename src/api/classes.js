import apiUrl from '../apiConfig'
import axios from 'axios'

//Get all of a teacher's courses --> filtering is handled on the backend. W/ token auth, Django rest will automatically have access to the django user model 
export const getTeacherCourses = (user) => {
	return axios({
		method: 'GET',
		url: `${apiUrl}/courses/`,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//Create course and related sections
export const createCourseAndSections = (user, course, sections) => {
    return axios({
		method: 'POST',
		url: `${apiUrl}/courses/`,
        data: {
            "course": course,
            "sections": sections,
        },
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//get data for an individual course and section data. On the backend, this is designed to return course info, section info, and student info. 
export const retrieveCourse = (courseId) => {
    return axios({
		method: 'GET',
		url: `${apiUrl}/courses/${courseId}`,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//update course info (teacher only)
export const updateCourse = (course) => {
    return axios({
		method: 'POST',
		url: `${apiUrl}/courses/${course.id}`,
        data: course,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//delete course (teacher only)
export const deleteCourse = (course) => {
    return axios({
		method: 'DELETE',
		url: `${apiUrl}/courses/${course.id}`,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//create new section (teacher only) (note that listing is obviated by the fact that data for all sections is emedded in course data. While section creation CAN be handled on course creation, teachers should be able to add section after a course is created)

