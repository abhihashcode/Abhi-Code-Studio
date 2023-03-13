import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import logo from '../image/logo.png'

const Container=styled(AppBar)`
   background:#060606;
   height:9vh;
`

const Header = () => {
  return (
    <Container position='static'>
        <Toolbar>
            <img src={logo} alt="logo" style={{height:'50px'}}/>
            <h2 className="copright-text" style={{marginLeft:'35%',fontSize:'20px',opacity:'0.1'}}>Created &copy; By Abhishek-Vishwakarma</h2>
        </Toolbar>
    </Container>
  )
}

export default Header