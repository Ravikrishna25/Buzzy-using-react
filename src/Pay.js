import "./Pay.css"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Fade from '@mui/material/Fade';
import AddCardIcon from '@mui/icons-material/AddCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
    
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Pay() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <IconButton
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
        <PaymentRoundedIcon sx={{ fontSize: 40 ,marginLeft:1}}   />
          </IconButton> 
           <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem disableRipple> 
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Credit Card" {...a11yProps(0)} />
            <Tab label="Debit Card" {...a11yProps(1)} />
            <Tab label="PayPal" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            {/* Item One */}
            <TextField
            id="standard-textarea"
            label="Card Number"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            multiline
            variant="standard"
            /><br/><br/>
            <TextField 
            id="standard-textarea"
            label="Card Name"
            placeholder="xxxx xxxx"
            multiline
            variant="standard"
            
            /><br/><br/>
            <TextField 
            id="standard-textarea"
            label="CVV/CV"
            placeholder="X X X"
            multiline
            variant="standard"
            
            /><br/><br/>
            <TextField 
            id="standard-textarea"
            label="ExpiryDate"
            placeholder="MM/YY"
            multiline
            variant="standard"
            
            />
        </TabPanel>
        <TabPanel value={value} index={1}>
        <TextField
            id="standard-textarea"
            label="Card Number"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            multiline
            variant="standard"
            /><br/><br/>
            <TextField 
            id="standard-textarea"
            label="Card Name"
            placeholder="xxxx xxxx"
            multiline
            variant="standard"
            
            /><br/><br/>
            <TextField 
            id="standard-textarea"
            label="CVV/CV"
            placeholder="X X X"
            multiline
            variant="standard"
            
            /><br/><br/>
            <TextField 
            id="standard-textarea"
            label="ExpiryDate"
            placeholder="MM/YY"
            multiline
            variant="standard"
            
            />
        </TabPanel>
        <TabPanel value={value} index={2}>
        <TextField
            id="standard-textarea"
            label="Card Number"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            multiline
            variant="standard"
            /><br/><br/>
            <TextField 
            id="standard-textarea"
            label="Card Name"
            placeholder="xxxx xxxx"
            multiline
            variant="standard"
            
            /><br/><br/>
            <TextField 
            id="standard-textarea"
            label="CVV/CV"
            placeholder="X X X"
            multiline
            variant="standard"
            
            /><br/><br/>
            <TextField 
            id="standard-textarea"
            label="ExpiryDate"
            placeholder="MM/YY"
            multiline
            variant="standard"
            
            />
        </TabPanel>
        </Box>
        {/* {/* </MenuItem> */}
        </MenuItem >
        {/* <AddCardIcon />

        </MenuItem> */}
        {/* <MenuItem>
           My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout */}

      </Menu>
        
    </div>
  );
}