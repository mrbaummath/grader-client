import React, { useState, useEffect } from 'react'
// Material imports
import { DataGrid, useGridApiEventHandler } from '@mui/x-data-grid'
import { ContentPasteSearchOutlined } from '@mui/icons-material'


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