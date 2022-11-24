import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import auth from "./firebase_config";
import { signOut } from "firebase/auth";
import { useNavigate,Link } from "react-router-dom";


const pages = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Settings', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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

    return (
        <AppBar position="static" sx={{ backgroundColor: "#242582" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton aria-label='Bus' style={{ color: 'white' }} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <DirectionsBusIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Buzzy
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'row',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                   
                                    

                                        <Typography textAlign="center">{page}</Typography>
                                 
                                    
                                </MenuItem>
                            ))} */}
                            {/* {pages.map((page) => ( */}
                                <MenuItem >
                                   
                                    
                                        <Link to="./home">

                                           <Typography textAlign="center">Home</Typography>
                                        </Link>
                                        <Link to="./home">

                                           <Typography textAlign="center">Home</Typography>
                                        </Link>
                                        <Link to="./home">

                                           <Typography textAlign="center">Home</Typography>
                                        </Link>
                                 
                                    
                                </MenuItem>
                            {/* ))}  */}
                        </Menu>
                    </Box>
                    <IconButton aria-label='Bus' style={{ color: 'white' }} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
                        <DirectionsBusIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Buzzy
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* {pages.map((page) => ( */}
                        <MenuItem >
                                   
                                    
                                   <Link to="/home" style={{textDecoration:"none",color:"white"}}>

                                      <Typography textAlign="center">Home</Typography>
                                   </Link>
                           </MenuItem>
                        <MenuItem >
                                   
                                    
                                   <Link to="/About" style={{textDecoration:"none",color:"white"}}>

                                      <Typography textAlign="center">About Us</Typography>
                                   </Link>
                           </MenuItem>
                        <MenuItem >
                                   
                                    
                                   <Link to="/contact" style={{textDecoration:"none",color:"white"}}>

                                      <Typography textAlign="center">Contact</Typography>
                                   </Link>
                           </MenuItem>
                                   
                               
                        {/* ))} */}
                    </Box>
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}

                    <Box sx={{ flexGrow: 0 }}>
                        
                        <Tooltip title="Open settings">
                            
                            <Button
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}>
                                <Avatar alt='icon' userIcon={< AccountCircleIcon />} />
                            </Button>
                        </Tooltip>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>
								My account
							</MenuItem>
							<MenuItem
								onClick={() => {
									signOut(auth);
									navigate("/", { replace: "true" });
								}}>
								Logout
							</MenuItem>
						</Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
