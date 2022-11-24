import React from 'react'
import Seat from "./Seat"
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import RoomIcon from '@mui/icons-material/Room';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './Flashcard.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './Navbar';


export default function Flashcard() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <ResponsiveAppBar />
            <Grid>
                <Box>
                    <Card className='card' elevation={21} sx={{minWidth:500,height:450}}>
                        <CardContent className='cardcontent'>
                            <Typography gutterBottom variant='h5' component={'div'}>
                                <h4><IconButton aria-label='Bus' fontSize='large'>
                                    <RoomIcon />
                                </IconButton>
                                    Dream Line Travels Pvt Ltd.
                                    <small className='rs'>
                                        <IconButton aria-label='Bus' fontSize='large'>
                                            <CurrencyRupeeIcon className='rs1' /><h4 className='rs1'>618.</h4>
                                        </IconButton>
                                    </small>
                                </h4>
                                <h6>Ac Sleeper(2+1)</h6>
                            </Typography>
                            <Typography variant='body2' color={'text-secondary'}>
                                <h4>
                                    <IconButton aria-label='Departure'>
                                        <DepartureBoardIcon />
                                    </IconButton>
                                    23:15 - 04:50
                                </h4>
                                <body2 className='place'>Gandhipuram - Bus Stand</body2>
                                <body2 className='line'>Coimbatore-Hosur</body2>
                                <h4>5h 35m • 13 seats • 6 single seats</h4>
                                <h4>
                                    <IconButton aria-label='Bus' fontSize='large'>
                                        <CalendarMonthIcon />
                                    </IconButton>
                                    Change Travel Date
                                </h4>

                                <div className='rest'>
                                    <Button
                                        id="demo-positioned-button"
                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        1 REST STOPS
                                    </Button>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Arrives at-12.30 AM</MenuItem>
                                        <MenuItem onClick={handleClose}>Stops for 10 mins</MenuItem>
                                        <MenuItem onClick={handleClose}>Krishnagiri Toll Plaza</MenuItem>
                                    </Menu>
                                </div>
                                <div>
                                    <Seat />
                                </div>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className='card' elevation={21}>
                        <CardContent className='cardcontent'>
                            <Typography gutterBottom variant='h5' component={'div'}>
                                <h4><IconButton aria-label='Bus' fontSize='large'>
                                    <RoomIcon />
                                </IconButton>
                                    Kalaimakal Travels(PR)
                                    <small className='rs'>
                                        <IconButton aria-label='Bus' fontSize='large'>
                                            <CurrencyRupeeIcon className='rs1' /><h4 className='rs1'>760.</h4>
                                        </IconButton>
                                    </small>
                                </h4>
                                <h6>Capella Ac Sleeper(2+1)</h6>
                            </Typography>
                            <Typography variant='body2' color={'text-secondary'}>
                                <h4>
                                    <IconButton aria-label='Departure'>
                                        <DepartureBoardIcon />
                                    </IconButton>
                                    22:45 - 04:30
                                </h4>
                                <body2 className='place'>Gandhipuram - Hosur Office</body2>
                                <body2 className='line'>Coimbatore-Hosur</body2>
                                <h4>5h 45m • 14 seats • 4 single seats</h4>
                                <h4>
                                    <IconButton aria-label='Bus' fontSize='large'>
                                        <CalendarMonthIcon />
                                    </IconButton>
                                    Change Travel Date
                                </h4>
                                <div className='rest'>
                                    <Button
                                        id="demo-positioned-button"
                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        1 REST STOPS
                                    </Button>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Arrives at-12:00 Am</MenuItem>
                                        <MenuItem onClick={handleClose}>Stops for 10 mins</MenuItem>
                                        <MenuItem onClick={handleClose}>HP PETROl PUMP-</MenuItem>
                                        <MenuItem onClick={handleClose}>Venkateshwara Fuel Service</MenuItem>
                                    </Menu>
                                </div>
                                <div>
                                    <Seat />
                                </div>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className='card' elevation={21}>
                        <CardContent className='cardcontent'>
                            <Typography gutterBottom variant='h5' component={'div'}>
                                <h4><IconButton aria-label='Bus' fontSize='large'>
                                    <RoomIcon />
                                </IconButton>
                                    A1 Travels
                                    <small className='rs'>
                                        <IconButton aria-label='Bus' fontSize='large'>
                                            <CurrencyRupeeIcon className='rs1' /><h4 className='rs1'>800.</h4>
                                        </IconButton>
                                    </small>
                                </h4>
                                <h6>Ac Seater/Sleeper(2+1)</h6>
                            </Typography>
                            <Typography variant='body2' color={'text-secondary'}>
                                <h4>
                                    <IconButton aria-label='Departure'>
                                        <DepartureBoardIcon />
                                    </IconButton>
                                    22:45 - 04:30
                                </h4>
                                <body2 className='place'>Gandhipuram - Bus Stand</body2>
                                <body2 className='line'>Coimbatore-Hosur</body2>
                                <h4>5h 45m • 33 seats • 13 single seats</h4>
                                <h4>
                                    <IconButton aria-label='Bus' fontSize='large'>
                                        <CalendarMonthIcon />
                                    </IconButton>
                                    Change Travel Date
                                </h4>
                                <div className='rest'>
                                    <Button
                                        id="demo-positioned-button"
                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        1 REST STOPS
                                    </Button>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Arrives at-02:45 AM</MenuItem>
                                        <MenuItem onClick={handleClose}>Stops for 15 mins</MenuItem>
                                        <MenuItem onClick={handleClose}>Sree Thulasi Delicious Veg Treat</MenuItem>
                                    </Menu>
                                </div>
                                <div>
                                <Seat />
                                </div>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className='card' elevation={21}>
                        <CardContent className='cardcontent'>
                            <Typography gutterBottom variant='h5' component={'div'}>
                                <h4><IconButton aria-label='Bus' fontSize='large'>
                                    <RoomIcon />
                                </IconButton>
                                    Rathimeena Travels B
                                    <small className='rs'>
                                        <IconButton aria-label='Bus' fontSize='large'>
                                            <CurrencyRupeeIcon className='rs1' /><h4 className='rs1'>1500.</h4>
                                        </IconButton>
                                    </small>
                                </h4>
                                <h6>Volve Muti-Axle Ac Sleeper(2+1)</h6>
                            </Typography>
                            <Typography variant='body2' color={'text-secondary'}>
                                <h4>
                                    <IconButton aria-label='Departure'>
                                        <DepartureBoardIcon />
                                    </IconButton>
                                    10:30 - 16:15
                                </h4>
                                <body2 className='place'>Omni Bus Stand - Bus Stand</body2>
                                <body2 className='line'>Coimbatore-Hosur</body2>
                                <h4>5h 45m • 24 seats • 3 single seats</h4>
                                <h4>
                                    <IconButton aria-label='Bus' fontSize='large'>
                                        <CalendarMonthIcon />
                                    </IconButton>
                                    Change Travel Date
                                </h4>
                                <div className='rest'>
                                    <Button
                                        id="demo-positioned-button"
                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        1 REST STOPS
                                    </Button>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Arrives at-01:45 PM</MenuItem>
                                        <MenuItem onClick={handleClose}>Stops for 25 mins</MenuItem>
                                        <MenuItem onClick={handleClose}>Aasai Aasai Anandha Bhavan</MenuItem>
                                        <MenuItem onClick={handleClose}>Delight,A/C pure veg Restaurant</MenuItem>
                                    </Menu>
                                </div>
                                <div>
                                <Seat />
                                </div>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </div>
    )
}