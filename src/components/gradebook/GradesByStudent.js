// React imports
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//app imports
import { getCourseGradesByStudent, updateGradesFromTable } from '../../api/gradebooks'
import GradeGrid from './GradeGrid'

import { Box, Button, Grid } from '@mui/material'



const GradesByStudent = ({user, msgAlert}) => {
    //declare gradeData state
    const [gradeData, setGradeData] = useState(null)
    //declare rows state
    const [gridRows, setGridRows] = useState(null)
    //declare assignments state
    const [assignments, setAssignments] = useState(null)
    //declare columns state
    const [gridColumns, setGridColumns] = useState(null)
    //grab course Id from parameters 
    const { courseId } = useParams()
    //declare state to track edited field
    const [editedField, setEditedField] = useState('')
    //declate state to track if there are grades that need to be updated. Will initialize to an empty array, if length is 0 there will be nothing to update
    const [gradesToUpdate, setGradesToUpdate] = useState({"ids":[], "updatePairs":[]})
 

    const rowify = (gradeData) => {
        const rows = gradeData.map((studentGradeEntry) => {
            let row = {}
            row.id = studentGradeEntry.id
            row.student = studentGradeEntry.student
            studentGradeEntry.course_graded_assignments.forEach((grade) => {
                row[grade.assignment] = grade.value
            })
            return row
        })
        return rows

    }

    const processRowUpdate = (newRow, oldRow) => {
        //compare two values and 
        if (newRow[editedField] !== oldRow[editedField]) {
            //get the grade Id associated w/ this row and edited field (i.e. the student's grade). The row's id is the same as the student's id 
            //start by filtering out the grades array returned from the serverAPI
            const studentGrades = gradeData.find(studentGrades => studentGrades.id===newRow.id).course_graded_assignments
            //now get the id for the grade w/ the appropriate field name
            const gradeId = studentGrades.find(grades => grades.assignment===editedField).id
            //new value
            const newGradeValue = newRow[editedField]
            setGradesToUpdate(prev => {
                return {
                ids: [...prev.ids, gradeId],
                updatePairs: [...prev.updatePairs, {gradeId, newGradeValue}]
                }
            })

        }
        return newRow
    }

    const handleGradeSave = (event) => {
        updateGradesFromTable(user, gradesToUpdate.updatePairs)
            .then((res) => setGradesToUpdate({"ids":[], "updatePairs":[]}))
            .catch((error) => {
                msgAlert({
					heading: `Error:`,
					message: `${error.message}`,
					variant: 'danger',
				})
			})
    }

    const handleProcessRowUpdateError = (error) => { 
         msgAlert({
            heading: `Error:`,
            message: `${error.message}`,
            variant: 'danger',
        })
    }

    const createColumnsArray = (assignmentData) => {
            let columnsArray = assignmentData.map((assignment) => {
            return {field: assignment.name, flex:1, minWidth:200, maxWidth:300, editable:true}
        })
        columnsArray.unshift({field:'student', flex:1, minWidth:200, maxWidth: 300, editable:true})
        return columnsArray
    }

    //on render, get all grades for the course 
    useEffect(() => {
        //api call to get all grades for couse. This will be processed by rowify() to be more formatted for Material's Data-Grid component
        getCourseGradesByStudent(user, courseId)
            .then((res) => {
                setGradeData(res.data.grades)
                setAssignments(res.data.assignments)
            })
            .catch(error => {
                msgAlert({
					heading: `Error:`,
					message: `${error.message}`,
					variant: 'danger',
				})
			})
            
    }, [])

    //once assignment level data comes in, set column state
    useEffect(() => {
        if (assignments) {
            let columnsUpdate = createColumnsArray(assignments)
            setGridColumns(columnsUpdate)
        }
    }, [assignments])

    //once grade data comes in, set row state -> will look for changes to grade data as well
    useEffect(() => {
        if (gradeData) {
            let rowsUpdate = rowify(gradeData)
            setGridRows(rowsUpdate)
        }
    },[gradeData])

    //set up rows and columns for data grid component

    if (gridColumns && gridRows) {
    
        return (
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Box sx={{ height: '50vh', width: '75%'}}>
                        <GradeGrid user={user} columns={gridColumns} rows={gridRows} processRowUpdate={processRowUpdate} onProcessRowUpdateError={handleProcessRowUpdateError} setEditedField={setEditedField} />
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Button disabled={gradesToUpdate.ids.length === 0} onClick={handleGradeSave}>Save Grades</Button>
                </Grid>

            </Grid>
        )
    } else {
        return (<></>)
    }

}

export default GradesByStudent