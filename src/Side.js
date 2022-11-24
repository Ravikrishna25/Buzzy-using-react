import React from 'react'
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material'
import "./Navbar.css"
function Side() {
  return (
    <div className='div'>
      <Card className='side' elevation={21}>
        <div className='scontent'>
            
            <br/>

            <img src='https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/4698/36119821240_c407f9e8f4_c.jpg' height={250} width={400}/><br/><br/>
            <Typography color="text.primary" variant="body2">
                We offers a Happy and Safe Journey with our Luxury Bus at a Budget Friendly.<br/>
                We provides Busses with TV facility with a Bathroom facility to enhance your Journey
              </Typography>
              <br/>
            <Typography color="text.primary" variant="h6">
                Offerings⬇️ <br />
                ▷A Pillow<br />
                ▷A Rug<br />
                ▷A Water Bottle<br />
                ▷A Headphones<br />
              
            </Typography>
        </div>
      </Card>
    </div>
  )
}

export default Side