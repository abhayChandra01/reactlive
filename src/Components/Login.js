import React from "react";
import { makeStyles } from "@mui/material";
import { useState } from "react";
import {Button,TextField,Grid} from "@mui/material";
import Series from "./Series";
import {useNavigate} from 'react-router-dom'

export default function Login() {
    var navigate=useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [msg,setMsg] = useState('')

    const handleSignIn=()=>{

        if(email=="abc@gmail.com" && password=="12345")
        {
            setMsg('')
            navigate("/series")
        }
        else
        {
            setMsg("WRONG EMAIL/PASSWORD")
        }

    }

    return(
        <div style={{backgroundColor: "#130f40",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}>

            <div style={{display:"flex",
                alignContent:'center',
                justifyContent:'center'}}>
                    <div style={{display:'flex',
                    padding:20,
                    marginTop:70,
                    width:700,
                    border: '2px solid black',
                    borderRadius:10,
                    backgroundColor: 'white',
                    }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div style={{display:'flex',justifyContent:'center',alignContent:'center',fontFamily:'serif',fontSize:24}}>
                    USER LOGIN
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={(event)=>setEmail(event.target.value)} fullWidth id="outlined-basic" label="email" variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth id="outlined-basic" onChange={(event)=>setPassword(event.target.value)} label="password" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={()=>handleSignIn()} variant="text" fullWidth>SIGN IN</Button>
                </Grid>
                <Grid item xs={12}>
                    <div style={{display:'flex',justifyContent:'center',alignContent:'center',fontFamily:'serif'}}>
                    {msg}
                    </div>
                </Grid>    

            </Grid>
        


         </div>
         </div>
        </div>
    )


}