import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import React from 'react'

const Alert__Error=(props)=> {
    return (
        <div>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error" variant="filled">{props.title}</Alert>
            </Stack>
        </div>
    )
}

export default Alert__Error