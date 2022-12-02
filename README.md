# Grader App
Grader is an online gradebook app which teachers can use to store student grades and generate real time data to track class progress. The app also supports a view for students to see current grades as well as feedback on individual assignments. 

This client will provide interactive user views for teachers and students. 

# Technologies
- React
- Material-UI
    - used for both styling and the data-grid component
    - the data grid component provides much of the spreadsheet functonality. Even the community version will have some basic filtering and the ability to update from a spreadsheet view

    

# User stories

## As a teacher, I want to...

### MVP
- create a class with section details and have a code to give students 
- create and grade assignments for students 
- see all grades from a class and be able to enter/update grades from a spreadsheet view

### v1
- leave feedback for students to see
- specify whether I want to see grades segemented by section or not and sort/edit accordingly 

### v2
- specify how I want the spreadsheet constructed 
- specify whether an assignment is graded numerially or only with letter grades 

### v3
- process data on the fly to get grade distribution information and to track student progress over time 

## As a student, I want to..
### MVP
- see my grades across all my classes 

### v1
- leave myself notes about progress

### v2
- see my progress in my classes over time

### v3
- connect with other students in my classes.

# Wire Frames 
[Wireframes generated on Lucid Chart](https://lucid.app/lucidspark/da82f086-beca-4b5f-9c59-03f8a4ea1f21/view?invitationId=inv_b0386057-0699-4bb8-91aa-b4dc0febdbaa#)

# Schedule

- Tuesday -> build models and seed data. Make sure joins are working correctly 
- Wednesday -> build backend routes
- Saturday -> test backend routes, look at tables generated
- Sunday -> make sure auth is working on backend
- Monday -> build Teacher views on front end, particuarly spreadsheet view
- Tuesday/Wednesday -> implement front end API calls to bring in data and make sure spreadsheets are poplating and saving 
- Thursday -> build student views on front end 

