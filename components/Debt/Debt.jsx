import React from 'react'
import { Grid } from '@mui/material'
import DebtList from './DebtList'
import DebtForm from './DebtForm'

function Debt() {
  return (
    <Grid container direction='column' justifyContent='center' alignItems='stretch'>
      <Grid item xs={12}>
        <DebtForm />
      </Grid>
      <Grid item xs={12}>
        <DebtList />
      </Grid>
    </Grid>
  )
}

export default Debt