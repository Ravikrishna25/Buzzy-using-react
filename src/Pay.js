// // import "./Pay.css"
// // import * as React from 'react';
// // import PropTypes from 'prop-types';
// // import Tabs from '@mui/material/Tabs';
// // import Tab from '@mui/material/Tab';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
// // import IconButton from '@mui/material/IconButton';
// // import Tooltip from '@mui/material/Tooltip';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import Divider from '@mui/material/Divider';
// // import PersonAdd from '@mui/icons-material/PersonAdd';
// // import Settings from '@mui/icons-material/Settings';
// // import Logout from '@mui/icons-material/Logout';
// // import Fade from '@mui/material/Fade';
// // import AddCardIcon from '@mui/icons-material/AddCard';

// // function TabPanel(props) {
// //   const { children, value, index, ...other } = props;
    
// //   return (
// //     <div
// //       role="tabpanel"
// //       hidden={value !== index}
// //       id={`simple-tabpanel-${index}`}
// //       aria-labelledby={`simple-tab-${index}`}
// //       {...other}
// //     >
// //       {value === index && (
// //         <Box sx={{ p: 3 }}>
// //           <Typography>{children}</Typography>
// //         </Box>
// //       )}
// //     </div>
// //   );
// // }

// // TabPanel.propTypes = {
// //   children: PropTypes.node,
// //   index: PropTypes.number.isRequired,
// //   value: PropTypes.number.isRequired,
// // };

// // function a11yProps(index) {
// //   return {
// //     id: `simple-tab-${index}`,
// //     'aria-controls': `simple-tabpanel-${index}`,
// //   };
// // }

// // export default function Pay() {
// //   const [value, setValue] = React.useState(0);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const open = Boolean(anchorEl);
// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };
// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <div>
// //           <IconButton
// //             id="fade-button"
// //             aria-controls={open ? 'fade-menu' : undefined}
// //             aria-haspopup="true"
// //             aria-expanded={open ? 'true' : undefined}
// //             onClick={handleClick}
// //           >
// //             {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
// //         <PaymentRoundedIcon sx={{ fontSize: 40 ,marginLeft:1}}   />
// //           </IconButton> 
// //            <Menu
// //         id="fade-menu"
// //         MenuListProps={{
// //           'aria-labelledby': 'fade-button',
// //         }}
// //         anchorEl={anchorEl}
// //         open={open}
// //         onClose={handleClose}
// //         TransitionComponent={Fade}
// //       >
// //         <MenuItem disableRipple> 
// //         <Box sx={{ width: '100%' }}>
// //         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
// //             <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
// //             <Tab label="Credit Card" {...a11yProps(0)} />
// //             <Tab label="Debit Card" {...a11yProps(1)} />
// //             <Tab label="PayPal" {...a11yProps(2)} />
// //             </Tabs>
// //         </Box>
// //         <TabPanel value={value} index={0}>
// //             {/* Item One */}
// //             <TextField
// //             id="standard-textarea"
// //             label="Card Number"
// //             placeholder="xxxx-xxxx-xxxx-xxxx"
// //             multiline
// //             variant="standard"
// //             /><br/><br/>
// //             <TextField 
// //             id="standard-textarea"
// //             label="Card Name"
// //             placeholder="xxxx xxxx"
// //             multiline
// //             variant="standard"
            
// //             /><br/><br/>
// //             <TextField 
// //             id="standard-textarea"
// //             label="CVV/CV"
// //             placeholder="X X X"
// //             multiline
// //             variant="standard"
            
// //             /><br/><br/>
// //             <TextField 
// //             id="standard-textarea"
// //             label="ExpiryDate"
// //             placeholder="MM/YY"
// //             multiline
// //             variant="standard"
            
// //             />
// //         </TabPanel>
// //         <TabPanel value={value} index={1}>
// //         <TextField
// //             id="standard-textarea"
// //             label="Card Number"
// //             placeholder="xxxx-xxxx-xxxx-xxxx"
// //             multiline
// //             variant="standard"
// //             /><br/><br/>
// //             <TextField 
// //             id="standard-textarea"
// //             label="Card Name"
// //             placeholder="xxxx xxxx"
// //             multiline
// //             variant="standard"
            
// //             /><br/><br/>
// //             <TextField 
// //             id="standard-textarea"
// //             label="CVV/CV"
// //             placeholder="X X X"
// //             multiline
// //             variant="standard"
            
// //             /><br/><br/>
// //             <TextField 
// //             id="standard-textarea"
// //             label="ExpiryDate"
// //             placeholder="MM/YY"
// //             multiline
// //             variant="standard"
            
// //             />
// //         </TabPanel>
// //         <TabPanel value={value} index={2}>
// //         <TextField
// //             id="standard-textarea"
// //             label="Card Number"
// //             placeholder="xxxx-xxxx-xxxx-xxxx"
// //             multiline
// //             variant="standard"
// //             /><br/><br/>
// //             <TextField 
// //             id="standard-textarea"
// //             label="Card Name"
// //             placeholder="xxxx xxxx"
// //             multiline
// //             variant="standard"
            
// //             /><br/><br/>
// //             <TextField 
// //             id="standard-textarea"
// //             label="CVV/CV"
// //             placeholder="X X X"
// //             multiline
// //             variant="standard"
            
// //             /><br/><br/>
// //             <TextField 
// //             id="standard-textarea"
// //             label="ExpiryDate"
// //             placeholder="MM/YY"
// //             multiline
// //             variant="standard"
            
// //             />
// //         </TabPanel>
// //         </Box>
// //         {/* {/* </MenuItem> */}
// //         </MenuItem >
// //         {/* <AddCardIcon />

// //         </MenuItem> */}
// //         {/* <MenuItem>
// //            My account
// //         </MenuItem>
// //         <Divider />
// //         <MenuItem>
// //           <ListItemIcon>
// //             <PersonAdd fontSize="small" />
// //           </ListItemIcon>
// //           Add another account
// //         </MenuItem>
// //         <MenuItem>
// //           <ListItemIcon>
// //             <Settings fontSize="small" />
// //           </ListItemIcon>
// //           Settings
// //         </MenuItem>
// //           <ListItemIcon>
// //             <Logout fontSize="small" />
// //           </ListItemIcon>
// //           Logout */}

// //       </Menu>
        
// //     </div>
// //   );
// // }
// import react from "react"
// import "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
// import "./style.css"

// function Pay(){
//     return(

//         <div class="wrapper" id="app">
//             <div class="card-form">
//             <div class="card-list">
//                 <div class="card-item" v-bind:class="{ '-active' : isCardFlipped }">
//                 <div class="card-item__side -front">
//                     <div class="card-item__focus" v-bind:class="{'-active' : focusElementStyle }" v-bind:style="focusElementStyle" ref="focusElement"></div>
//                     <div class="card-item__cover">
//                     <img
//                     v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" class="card-item__bg"/>
//                     </div>
                    
//                     <div class="card-item__wrapper">
//                     <div class="card-item__top">
//                         <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" class="card-item__chip"/>
//                         <div class="card-item__type">
//                         <transition name="slide-fade-up">
//                             <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" v-bind:key="getCardType" alt="" class="card-item__typeImg"/>
//                         </transition>
//                         </div>
//                     </div>
//                     <label for="cardNumber" class="card-item__number" ref="cardNumber">
//                         <template v-if="getCardType === 'amex'">
//                         <span v-for="(n, $index) in amexCardMask" :key="$index">
//                         <transition name="slide-fade-up">
//                             <div
//                             class="card-item__numberItem"
//                             v-if="$index > 4 && $index < 14 && cardNumber.length > $index && n.trim() !== ''"
//                             >*</div>
//                             <div class="card-item__numberItem"
//                             :class="{ '-active' : n.trim() === '' }"
//                             :key="$index" v-else-if="cardNumber.length > $index">
//                             {{cardNumber[$index]}}
//                             </div>
//                             <div
//                             class="card-item__numberItem"
//                             :class="{ '-active' : n.trim() === '' }"
//                             v-else
//                             :key="$index + 1"
//                             >{{n}}</div>
//                         </transition>
//                         </span>
//                         </template>

//                         <template v-else>
//                         <span v-for="(n, $index) in otherCardMask" :key="$index">
//                             <transition name="slide-fade-up">
//                             <div
//                                 class="card-item__numberItem"
//                                 v-if="$index > 4 && $index < 15 && cardNumber.length > $index && n.trim() !== ''"
//                             >*</div>
//                             <div class="card-item__numberItem"
//                                 :class="{ '-active' : n.trim() === '' }"
//                                 :key="$index" v-else-if="cardNumber.length > $index">
//                                 {{cardNumber[$index]}}
//                             </div>
//                             <div
//                                 class="card-item__numberItem"
//                                 :class="{ '-active' : n.trim() === '' }"
//                                 v-else
//                                 :key="$index + 1"
//                             >{{n}}</div>
//                             </transition>
//                         </span>
//                         </template>
//                     </label>
//                     <div class="card-item__content">
//                         <label for="cardName" class="card-item__info" ref="cardName">
//                         <div class="card-item__holder">Card Holder</div>
//                         <transition name="slide-fade-up">
//                             <div class="card-item__name" v-if="cardName.length" key="1">
//                             <transition-group name="slide-fade-right">
//                                 <span class="card-item__nameItem" v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')" v-if="$index === $index" v-bind:key="$index + 1">{{n}}</span>
//                             </transition-group>
//                             </div>
//                             <div class="card-item__name" v-else key="2">Full Name</div>
//                         </transition>
//                         </label>
//                         <div class="card-item__date" ref="cardDate">
//                         <label for="cardMonth" class="card-item__dateTitle">Expires</label>
//                         <label for="cardMonth" class="card-item__dateItem">
//                             <transition name="slide-fade-up">
//                             <span v-if="cardMonth" v-bind:key="cardMonth">{{cardMonth}}</span>
//                             <span v-else key="2">MM</span>
//                             </transition>
//                         </label>
//                         /
//                         <label for="cardYear" class="card-item__dateItem">
//                             <transition name="slide-fade-up">
//                             <span v-if="cardYear" v-bind:key="cardYear">{{String(cardYear).slice(2,4)}}</span>
//                             <span v-else key="2">YY</span>
//                             </transition>
//                         </label>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 <div class="card-item__side -back">
//                     <div class="card-item__cover">
//                     <img
//                     v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" class="card-item__bg">
//                     </div>
//                     <div class="card-item__band"></div>
//                     <div class="card-item__cvv">
//                         <div class="card-item__cvvTitle">CVV</div>
//                         <div class="card-item__cvvBand">
//                         <span v-for="(n, $index) in cardCvv" :key="$index">
//                             *
//                         </span>

//                     </div>
//                         <div class="card-item__type">
//                             <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" class="card-item__typeImg">
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             <div class="card-form__inner">
//                 <div class="card-input">
//                 <label for="cardNumber" class="card-input__label">Card Number</label>
//                 <input type="text" id="cardNumber" class="card-input__input" v-mask="generateCardNumberMask" v-model="cardNumber" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardNumber" autocomplete="off">
//                 </div>
//                 <div class="card-input">
//                 <label for="cardName" class="card-input__label">Card Holders</label>
//                 <input type="text" id="cardName" class="card-input__input" v-model="cardName" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardName" autocomplete="off">
//                 </div>
//                 <div class="card-form__row">
//                 <div class="card-form__col">
//                     <div class="card-form__group">
//                     <label for="cardMonth" class="card-input__label">Expiration Date</label>
//                     <select class="card-input__input -select" id="cardMonth" v-model="cardMonth" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
//                         <option value="" disabled selected>Month</option>
//                         <option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth" v-bind:key="n">
//                             {{n < 10 ? '0' + n : n}}
//                         </option>
//                     </select>
//                     <select class="card-input__input -select" id="cardYear" v-model="cardYear" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
//                         <option value="" disabled selected>Year</option>
//                         <option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
//                             {{$index + minCardYear}}
//                         </option>
//                     </select>
//                     </div>
//                 </div>
//                 <div class="card-form__col -cvv">
//                     <div class="card-input">
//                     <label for="cardCvv" class="card-input__label">CVV</label>
//                     <input type="text" class="card-input__input" id="cardCvv" v-mask="'####'" maxlength="4" v-model="cardCvv" v-on:focus="flipCard(true)" v-on:blur="flipCard(false)" autocomplete="off">
//                     </div>
//                 </div>
//                 </div>

//                 <button class="card-form__button">
//                 Submit
//                 </button>
//             </div>
//             </div>
            
            
//         </div>
//     )
// }

import React from 'react'

function Pay(){
  return (
    
    <div>
    <meta charSet="UTF-8" />
    <title> Credit Card Form </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
    <link rel="stylesheet" href="./style.css" />
    {/* partial:index.partial.html */}
    <div className="wrapper" id="app">
        <div className="card-form">
        <div className="card-list">
            <div className="card-item" v-bind:class="{ '-active' : isCardFlipped }">
            <div className="card-item__side -front">
                <div className="card-item__focus" v-bind:class="{'-active' : focusElementStyle }" v-bind:style="focusElementStyle" ref="focusElement" />
                <div className="card-item__cover">
                <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" className="card-item__bg" />
                </div>
                <div className="card-item__wrapper">
                <div className="card-item__top">
                    <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" className="card-item__chip" />
                    <div className="card-item__type">
                    <transition name="slide-fade-up">
                        <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" v-bind:key="getCardType" alt="" className="card-item__typeImg" />
                    </transition>
                    </div>
                </div>
                <label htmlFor="cardNumber" className="card-item__number" ref="cardNumber">
                    <template v-if="getCardType === 'amex'" />
                    <template v-else />
                </label>
                <div className="card-item__content">
                    <label htmlFor="cardName" className="card-item__info" ref="cardName">
                    <div className="card-item__holder">Card Holder</div>
                    <transition name="slide-fade-up">
                        <div className="card-item__name" v-if="cardName.length" key={1}>
                        <transition-group name="slide-fade-right">
                            <span className="card-item__nameItem" v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')" v-if="$index === $index" v-bind:key="$index + 1">{'{'}{'{'}n{'}'}{'}'}</span>
                        </transition-group>
                        </div>
                        <div className="card-item__name" v-else key={2}>Full Name</div>
                    </transition>
                    </label>
                    <div className="card-item__date" ref="cardDate">
                    <label htmlFor="cardMonth" className="card-item__dateTitle">Expires</label>
                    <label htmlFor="cardMonth" className="card-item__dateItem">
                        <transition name="slide-fade-up">
                        <span v-if="cardMonth" v-bind:key="cardMonth">{'{'}{'{'}cardMonth{'}'}{'}'}</span>
                        <span v-else key={2}>MM</span>
                        </transition>
                    </label>
                    /
                    <label htmlFor="cardYear" className="card-item__dateItem">
                        <transition name="slide-fade-up">
                        <span v-if="cardYear" v-bind:key="cardYear">{'{'}{'{'}String(cardYear).slice(2,4){'}'}{'}'}</span>
                        <span v-else key={2}>YY</span>
                        </transition>
                    </label>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-item__side -back">
                <div className="card-item__cover">
                <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" className="card-item__bg" />
                </div>
                <div className="card-item__band" />
                <div className="card-item__cvv">
                <div className="card-item__cvvTitle">CVV</div>
                <div className="card-item__cvvBand">
                    <span v-for="(n, $index) in cardCvv" :key="$index">
                    *
                    </span>
                </div>
                <div className="card-item__type">
                    <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" className="card-item__typeImg" />
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="card-form__inner">
            <div className="card-input">
            <label htmlFor="cardNumber" className="card-input__label">Card Number</label>
            <input type="text" id="cardNumber" className="card-input__input" v-mask="generateCardNumberMask" v-model="cardNumber" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardNumber" autoComplete="off" />
            </div>
            <div className="card-input">
            <label htmlFor="cardName" className="card-input__label">Card Holders</label>
            <input type="text" id="cardName" className="card-input__input" v-model="cardName" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardName" autoComplete="off" />
            </div>
            <div className="card-form__row">
            <div className="card-form__col">
                <div className="card-form__group">
                <label htmlFor="cardMonth" className="card-input__label">Expiration Date</label>
                <select className="card-input__input -select" id="cardMonth" v-model="cardMonth" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
                    <option value disabled selected>Month</option>
                    <option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth" v-bind:key="n">
                    {'{'}{'{'}n &lt; 10 ? '0' + n : n{'}'}{'}'}
                    </option>
                </select>
                <select className="card-input__input -select" id="cardYear" v-model="cardYear" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
                    <option value disabled selected>Year</option>
                    <option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
                    {'{'}{'{'}$index + minCardYear{'}'}{'}'}
                    </option>
                </select>
                </div>
            </div>
            <div className="card-form__col -cvv">
                <div className="card-input">
                <label htmlFor="cardCvv" className="card-input__label">CVV</label>
                <input type="text" className="card-input__input" id="cardCvv" v-mask="'####'" maxLength={4} v-model="cardCvv" v-on:focus="flipCard(true)" v-on:blur="flipCard(false)" autoComplete="off" />
                </div>
            </div>
            </div>
            <button className="card-form__button">
            Submit
            </button>
        </div>
        </div>
    </div>
    {/* partial */}
    </div>
  )

}


export default Pay
