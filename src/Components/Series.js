import React from "react";
import { makeStyles } from "@mui/material";
import { useState } from "react";
import {Button,TextField,Grid} from "@mui/material";

export default function Series() {

    const [firstNumber,setFirstNumber] = useState(0)
    const [secondNumber,setSecondNumber] = useState(0)
    const [series,setSeries] = useState([])

    const handleProceed=()=>{
        var a = firstNumber
        var b = secondNumber
        var i=0
        var c=0
        var ser = []
        for(i;i<10;i++)
        {
            if(i==0)
            {
                ser.push(a)
            }
            else if(i==1)
            {
                ser.push(b)
            }
            else
            {
                c=parseInt(a)+parseInt(b)
                ser.push(c)
                a=b
                b=c
            }

        }
        setSeries(ser)
        
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
                    Fibonacci Series
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <TextField type="number" onChange={(event)=>setFirstNumber(event.target.value)} fullWidth id="outlined-basic" label="First Number" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                    <TextField fullWidth type="number" id="outlined-basic" onChange={(event)=>setSecondNumber(event.target.value)} label="Second Number" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                <Button onClick={()=>handleProceed()} variant="text" fullWidth>PROCEED</Button>
                </Grid>
                <Grid item xs={12}>
                <div style={{display:'flex',justifyContent:'center',alignContent:'center',fontFamily:'serif',fontSize:24}}>
                
                    <div>{series.map( e =>
                    <span>{ e } , </span>   
                    )}
                    </div>
                </div>
                </Grid>    

            </Grid>
        


         </div>
         </div>
        </div>
    )


}