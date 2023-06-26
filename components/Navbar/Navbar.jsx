import React from 'react'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='transparent'>
        <Container>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#eee' }}>DebtHub</Link>
            </Typography>
            <Button variant='contained' sx={{ margin: '5px' }} onClick={() => navigate('/home')}>Home</Button>
            <Button variant='contained' sx={{ margin: '5px' }} onClick={() => navigate('/debts')}>Debts</Button>
            <Button variant='contained' sx={{ margin: '5px' }} onClick={() => navigate('/profile/user')}>Perfil</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Navbar