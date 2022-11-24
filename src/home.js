import { React, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import "./Home.css"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ResponsiveAppBar from "./Navbar.js";
import {Link} from "react-router-dom"

export default function Home() {
  const userDetails = {
    from: "",
    to: "",
  };
  let [values, setValues] = useState(userDetails);
  const loc1 = [
    {
      value: "Coimbatore",
      label: "Coimbatore",
    },
    {
      value: "Chennai",
      label: "Chennai",
    },
    {
      value: "Bangalore",
      label: "Bangalore",
    },
    {
      value: "Madurai",
      label: "Madurai",
    },
    {
      value: "Thoothukudi",
      label: "Thoothukudi",
    },
    {
      value: "Cochin",
      label: "Cochin",
    },
  ];
  const loc2 = [
    {
      value: "Coimbatore",
      label: "Coimbatore",
    },
    {
      value: "Hosur",
      label: "Hosur",
    },
    {
      value: "Chennai",
      label: "Chennai",
    },
    {
      value: "Bangalore",
      label: "Bangalore",
    },
    {
      value: "Madurai",
      label: "Madurai",
    },
    {
      value: "Thoothukudi",
      label: "Thoothukudi",
    },
    {
      value: "Cochin",
      label: "Cochin",
    },
  ];
  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="home">
      <ResponsiveAppBar />
       <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={500}
        justifyContent={"center"}
        margin="auto"
        marginTop={12.5}
        marginLeft={55}
        // marginBottom={0}

        position={"fixed"}
        padding={20}
        paddingLeft={30}
        paddingRight={30}
        paddingBottom={10}
        paddingTop={10}
        borderRadius={"10px"}
        boxShadow={"20px 20px 30px #ccc"}
        sx={{
          backgroundColor: "#242582",
          "&:hover": { boxShadow: "25px 25px 35px #ccc" },
        }}
      > 
        <Grid align="center">
          <Typography variant="h3" padding={3} sx={{ color: "#ffffff" }}>
            BUZZY
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid>
            <InputLabel sx={{ color: "#ffffff", fontSize: 20 }}>
              From
            </InputLabel>
            <TextField
              variant="outlined"
              select
              name="from"
              value={values.from}
              onChange={handleValues}
              size="small"
              sx={{
                width: "250px",
                backgroundColor: "white",
                opacity: 0.9,
                borderRadius: 1,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton edge="start">
                      {" "}
                      <LocationOnIcon />{" "}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            >
              {loc1.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <br />
          <Grid>
            <InputLabel sx={{ color: "#ffffff", fontSize: 20 }}>To</InputLabel>
            <TextField
              variant="outlined"
              select
              name="to"
              value={values.to}
              onChange={handleValues}
              size="small"
              sx={{
                width: "250px",
                backgroundColor: "white",
                opacity: 0.9,
                borderRadius: 1,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton edge="start">
                      <LocationOnIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            >
              {loc2.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <br />
          <Grid>
            <InputLabel sx={{ color: "#ffffff", fontSize: 20 }}>
              Date
            </InputLabel>
            <TextField
              variant="outlined"
              type="date"
              size="small"
              sx={{
                width: "250px",
                backgroundColor: "white",
                opacity: 0.9,
                borderRadius: 1,
              }}
            />
          </Grid>
          <br />
          <br />
          <Grid align="center">

            <Link to="/flash" style={{textDecoration:'none'}}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<DirectionsBusIcon />}
                sx={{
                  color: "black",
                  background: "#ffffff",
                  opacity: 0.8,
                  "&:hover": { background: "#ffffff", opacity: 1 },
                }}
                align="center"
              >
                SELECT BUZZZ
              </Button>
                </Link>
          </Grid>
        </form>
      </Box>
    </div>
  );
}
			{/* <Grid container columns={12}>
				<Grid item md={11}></Grid>
				<Grid item md={1}>
					<div>
						<Button
							id="basic-button"
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}>
							Account
						</Button>
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
					</div>
				</Grid>
			</Grid> */}
		
		
