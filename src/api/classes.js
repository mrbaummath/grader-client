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

//get all classes student view --> backend automatically filters by user
export const getStudentClasses = (user) => {
	return axios({
		method: 'GET',
		url: `${apiUrl}/courses/myclasses`,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//Create course and related sections
export const createCourseAndSections = (user, courseData) => {
    return axios({
		method: 'POST',
		url: `${apiUrl}/courses/`,
        data: courseData,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//get data for an individual course and section data. On the backend, this is designed to return course info, section info, and student info. 
export const retrieveCourse = (courseId, user) => {
    return axios({
		method: 'GET',
		url: `${apiUrl}/courses/${courseId}`,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//update course info (teacher only)
export const updateCourse = (course, user) => {
    return axios({
		method: 'PATCH',
		url: `${apiUrl}/courses/${course.id}`,
        data: course,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//delete course (teacher only)
export const deleteCourse = (course, user) => {
    return axios({
		method: 'DELETE',
		url: `${apiUrl}/courses/${course.id}`,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//create new section (teacher only) (note that listing is obviated by the fact that data for all sections is emedded in course data. While section creation CAN be handled on course creation, teachers should be able to add section after a course is created)
export const createSection = (courseId, section, user) => {
    return axios({
		method: 'POST',
		url: `${apiUrl}/courses/${courseId}/sections`,
        data: section,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

// get specific section 
export const retrieveSection = (courseId, sectionId, user) => {
    return axios({
		method: 'GET',
		url: `${apiUrl}/courses/${courseId}/sections/${sectionId}`,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//update section information (teacher only)
export const updateSection = (courseId, section, user) => {
    return axios({
		method: 'PATCH',
		url: `${apiUrl}/courses/${courseId}/sections/${section.id}`,
        data: section,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}

//delete specific secion
export const deleteSection = (courseId, section, user) => {
    return axios({
		method: 'DELETE',
		url: `${apiUrl}/courses/${courseId}/sections/${section.id}`,
        headers: {
			Authorization: `Token ${user.token}`
		}		
	})
}


