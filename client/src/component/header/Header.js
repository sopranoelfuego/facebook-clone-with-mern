import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import "./Header.css"
import PeopleIcon from '@material-ui/icons/People';
import  {IconButton, Avatar}  from "@material-ui/core"

 import {Add,Forum,NotificationsActive,ExpandMore} from "@material-ui/icons"

export default function Header() {
    return (
        <div className="header">
             {/* left header logo with search*/}
                <div className="header__left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" 
                      className="img" alt="fb__logo"/>
                      {/* left header__left search log with input */}
                      <div className="left__searchIcon_search__container">
                          <SearchIcon />
                          <input  placeholder="search..."/>
                        
                      </div>


                </div>
                   {/* center with icon */}
                   <div className="header__center">
                            <div className="header__center_option_active">

                                <IconButton>
                                <HomeIcon fontSize="large" color="primary"/>
                                </IconButton>
                            </div>
                            <div className="header__center_option">

                                
                            <IconButton>
                                        <LiveTvIcon fontSize="large"/>
                                </IconButton>
                            </div>
                            <div className="header__center_option">

                                        <IconButton >
                                            <PeopleIcon fontSize="large"/>
                                        </IconButton>
                            </div>
                            <div className="SportsEsportsIcon">
                                <IconButton>
                                    <SportsEsportsIcon fontSize="large"/>
                                </IconButton>

                            </div>

                    </div>
                                   {/* end of center with icon */}
                                   {/* right menu */}
                            <div className="header__right">
                                 
                                  <div className="avatar" >
                                     <Avatar/>
                                      <h4 >kirobezo</h4>
                                      
                                  </div>
                                  <IconButton>
                                  <Add />
                                  </IconButton>

                                  <IconButton>
                                  <Forum/>
                                  </IconButton>

                                  <IconButton>
                                  
                                  <NotificationsActive/>
                                  </IconButton>
                                  <IconButton>
                                  <ExpandMore/>
                                  </IconButton>
                             
                                    
                            </div>

        </div>
    )
}
