import * as React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import "./details.css";
import { Card } from '@mui/material';

export default function InsetDividers() {
  return (
   

         
          <Card  elevation={21} className="details" >

                <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }} 
                >
                <ListItem>
                    <ListItemAvatar>
                    
                            <LocationOnOutlinedIcon />
                    
                    </ListItemAvatar>
                    <ListItemText  secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Boarding 
                  </Typography>
                  : Coimbatore
                </React.Fragment>
              } />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    
                            <LocationOnOutlinedIcon />
                    
                    </ListItemAvatar>
                    <ListItemText primary="Dropping" secondary="Hosur" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <AcUnitOutlinedIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Type" secondary="Ac" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <CalendarMonthOutlinedIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Date" secondary="Dec 21, 2022" />
                </ListItem>
                <Divider variant="inset" component="li" />

                <ListItem>
                    <ListItemAvatar>
                    <CurrencyRupeeOutlinedIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Fare" secondary="₹800 / Seat" />
                </ListItem>
                </List>
          </Card>
      
    

  );
}