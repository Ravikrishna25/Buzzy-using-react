import React from 'react';
import Pay from "./Pay"
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom"

import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import { Card } from '@mui/material';
import "./graph.css";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();



  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Hurray! Pack Up🎉🎉', { variant });
  };
  const handleClickError = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('OOPs!! Sorry For the Inconvenience🥲🥲', { variant });
  };
  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('success')}>Book</Button>
      <Button onClick={handleClickError('error')}>Cancel</Button>
    </React.Fragment>
  );
}



function ProUi() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className='container'>
      <Card elevation={21}  className='CARD'>
        <div className='content'>

          <Stack direction="row" spacing={1.5}>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              A1
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              B1
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen} style={{ color: "red" }} disabled>
              <ChairOutlinedIcon />
              C1
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen} >
              <ChairOutlinedIcon />
              D1
            </IconButton>
          </Stack>
          <br></br>
          <Stack direction="row" spacing={1.5}>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              A2
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              B2
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              C2
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              D2
            </IconButton>
          </Stack>
          <br></br>
          <Stack direction="row" spacing={1.5}>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              A3
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen} style={{ color: "red" }} disabled>
              <ChairOutlinedIcon />
              B3
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              C3
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              D3
            </IconButton>
          </Stack>
          <br></br>
          <Stack direction="row" spacing={1.5}>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              A4
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              B4
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen} style={{ color: "red" }} disabled>
              <ChairOutlinedIcon />
              C4
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}  >
              <ChairOutlinedIcon />
              D4
            </IconButton>
          </Stack>
          <br></br>
          <Stack direction="row" spacing={1.5}>
            <IconButton className="button" onClick={handleClickOpen} style={{ color: "red" }} disabled>
              <ChairOutlinedIcon />
              A5
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              B5
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              C5
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              D5
            </IconButton>
          </Stack>
          <br></br>
          <Stack direction="row" spacing={1.5}>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              A6
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              B6
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen} style={{ color: "red" }} disabled>
              <ChairOutlinedIcon />
              C6
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen} >
              <ChairOutlinedIcon />
              D6
            </IconButton>
          </Stack>
          <br></br>
          <Stack direction="row" spacing={1.5}>
            <IconButton className="button" onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              A7
            </IconButton>
            <IconButton className="button" onClick={handleClickOpen} style={{ color: "red" }} disabled>
              <ChairOutlinedIcon />
              B7
            </IconButton>

            <IconButton className='button' onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              C7
            </IconButton>
            <IconButton className='button' onClick={handleClickOpen}>
              <ChairOutlinedIcon />
              D7
            </IconButton>
          </Stack>

        </div>
      </Card>

      <br />
      <Typography variant="h5" component="h5" className='text' >
        Seat Avail-<b>15</b>
      </Typography>
      {/* <Link to="/home">
        <button>
          back
        </button>
      </Link> */}

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle id="responsive-dialog-title">
          {"Passenger Details for Seat » L1"}
        </DialogTitle>
        <div>

          <DialogContent>
            <DialogContentText>
              {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      Name: 
                  <AccountCircle sx={{marginLeft:'50px', color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField id="input-with-sx" label="Name.." variant="standard" />
                </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      Number: 
                  <AccountCircle sx={{ marginLeft:'35px',color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField id="input-with-sx" label="Number.." variant="standard" />
                </Box> */}
              {/* <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              > */}
              <Typography variant="button" display="block" gutterBottom>
                Name:
              </Typography>
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              {/* </Box> */}
              {/* <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                Validate
                autoComplete="off"
              > */}
              <br></br>
              <Typography variant="button" display="block" gutterBottom>
                Contact:
              </Typography>
              <TextField id="outlined-basic" label="Number" placeholder='xxxxxxxxxx' variant="outlined" />
              {/* </Box> */}
            </DialogContentText>

          </DialogContent>
          <Typography variant="h4" marginLeft={'10px'} marginTop={'10px'}>
            Fare : ₹800
          </Typography>
          <br></br>
          {/* <PaymentRoundedIcon sx={{ fontSize: 40 ,marginLeft:17}} className='pay'  /> */}
        </div>
          <Pay className="pay" />

        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Cancel
          </Button> */}
          {/* <Button onClick={handleClose} autoFocus>
            Book */}
          <SnackbarProvider maxSnack={1}>
            <MyApp />
          </SnackbarProvider>
          {/* </Button> */}
        </DialogActions>
      </Dialog>

    </div>

  )
}

export default ProUi