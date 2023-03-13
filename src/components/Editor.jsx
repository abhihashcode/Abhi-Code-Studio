import React from 'react'
import { useState } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import { Box, Typography, Button, styled } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';

const Heading=styled(Box)`
   background:#1d1e22;
   display:flex;
   padding:9px 12px;
`;

const Header=styled(Box)`
    display:flex;
    background:#060606;
    color:#aaaebc;
    justify-content:space-between;
    font-weight:700;
`;

const Container=styled('Box')`
   flex-grow:1;
   flex-basic:0;
   display:flex;
   flex-direction:column;
   padding:0 8px 8px;
`;

const Editor = ({heading,icon,color,value,onChange}) => {

    const [open,setOpen]=useState(true);

    const handleChange=(editor,data,value)=>{
         onChange(value)
    }
  return (
    <Container style={open?null:{flexGrow:0}}>
        <Header>
            <Heading>
                <Box component="span" style={{
                    background:color,
                    display:'flex',
                    height:20,
                    width:20,
                    marginRight:5,
                    paddingBottom:5,
                    borderRadius:5,
                    placeContent:'center',
                    color:'#000'
                    }}>{icon}</Box>
                {heading}
            </Heading>
    
        <CloseFullscreen
          onClick={()=>{
            setOpen(prevState=>!prevState)
          }}
          style={{cursor:'pointer',alignSelf:'center'}}
        />
        </Header>
        <ControlledEditor
        className='controlled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
            theme:'material',
            lineNumbers: true
        }}
        />
    </Container>
  )
}

export default Editor