import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from '../utilis/Toast';
import axios from 'axios';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


export default function SignIn() {

const [ email,setEmail ] = ussState('');
const [ password,setPassword ] = ussState('');

const navigate = useNavigate();


 const handleSubmit = async(event) => {
  try {
        event.preventDefault();
        console.log( email,password )   
    
      const obj = {
        email,
        password,
    }

    const respone = await axios.post(`${BASE_URL}/login`,obj)
     console.log("respone", respone);
     if(respone.data.status){
      Toast(respone.data.message, "success")

      localStorage.setItem("userdata" , JSON.stringify(respone.data.data))
      localStorage.setItem("token", respone.data.token)
       
      navigate("/")
     
    }else{
      Toast(respone.data.message, "error")
    }
  } catch (error) {
    console.log("error",error)
    Toast(error?.response?.data?.message || error.message, "error");

    
  }
}
 
  return (
    <>
    <div className='container'>
     <div className='container-form'>
     <img src='../../public/images/blood-donation.jpg' className='form-Img'/>
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>

     </div>
    </div>    
 
    </>

  );
}