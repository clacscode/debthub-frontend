import React, { useState, useEffect } from 'react'
import { Grid, Card, Typography, CardContent, TextField, Button } from '@mui/material'

function DebtForm() {

  let quotaValue = 0;

  const [debt, setDebt] = useState({
    dni: "198810045",
    description: "",
    total: 0,
    dues: 0,
    quotaValue: "0"
  });

  const [quota, setQuota] = useState(0);

  const currentDate = new Date().toDateString();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(debt)
  }

  const handleChange = e =>
    setDebt({ ...debt, [e.target.name]: e.target.value });


  useEffect(() => {
    if (debt.total > 0 && debt.dues > 0) {
      const quotaValue = debt.total / debt.dues;
      setDebt({ ...debt, quotaValue });
      setQuota(quotaValue);
    } else {
      setDebt({ ...debt, quotaValue: 0 });
      setQuota(0);
    }
  }, [debt.total, debt.dues]);


  // if (debt.total > 0 && debt.dues > 0) {
  //   quotaValue = (debt.total / debt.dues).toString();
  //   debt.quotaValue = quotaValue;
  // }

  // useEffect(() => {
  //   setQuota(quotaValue);
  // }, []);

  return (
    <Grid item xs={8} alignItems='stretch' justifyContent='center'>
      <Card sx={{ mt: 5 }} style={{
        backgroundColor: '#1e272e',
        padding: '1rem'
      }}>
        <Typography variant='5' textAlign='center' color='white'>Insert Debt</Typography>
        <CardContent>
          <form onClick={handleSubmit}>
            <TextField
              disabled
              variant='filled'
              label='DNI'
              defaultValue='198810045'
              sx={{
                display: 'block',
                margin: '5px'
              }}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
            <TextField
              required
              variant='filled'
              label='Description'
              sx={{
                display: 'block',
                margin: '5px'
              }}
              name='description'
              onChange={handleChange}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
            <TextField
              disabled
              variant='filled'
              label='Fecha de Ingreso'
              defaultValue={currentDate}
              sx={{
                display: 'block',
                margin: '5px'
              }}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
            {/* <TextField
              required
              variant='filled'
              label='Period'
              placeholder='YYYY-MM-DD'
              sx={{
                display: 'block',
                margin: '5px'
              }}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            /> */}
            <TextField
              variant='filled'
              label='Total'
              type='number'
              placeholder='0'
              sx={{
                display: 'block',
                margin: '5px'
              }}
              name='total'
              onChange={handleChange}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
            <TextField
              variant='filled'
              label='Cuotas'
              type='number'
              placeholder='0'
              sx={{
                display: 'block',
                margin: '5px'
              }}
              name='dues'
              onChange={handleChange}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
            <TextField
              disabled
              variant='filled'
              label='Valor cuota'
              type='number'
              defaultValue={quota}
              sx={{
                display: 'block',
                margin: '5px'
              }}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
            <Button variant='contained' sx={{ margin: '5px' }} type='submiV,t'>Ingresar</Button>
            <Button variant='contained' sx={{ margin: '5px' }} type='submit'>Actualizar</Button>
            <Button variant='contained' sx={{ margin: '5px' }} type='submit'>Eliminar</Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default DebtForm