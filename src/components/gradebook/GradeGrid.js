import React, { useState, useEffect } from 'react'
// Material imports
import { DataGrid} from '@mui/x-data-grid'



const GradeGrid = ({user, rows, columns, processRowUpdate, onProcessRowUpdateError, setEditedField}) => {

    



    return (
        <DataGrid
            rows={rows}
            columns={columns}
            processRowUpdate={processRowUpdate}
            onProcessRowUpdateError={onProcessRowUpdateError}
            onCellEditStop={(params)=> setEditedField(params.field)}
            experimentalFeatures={{ newEditingApi: true }}
            

        />
    )
}


export default GradeGrid 