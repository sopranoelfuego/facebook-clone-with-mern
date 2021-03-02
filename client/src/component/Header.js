import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import "./Header.css"
import PeopleIcon from '@material-ui/icons/People';
import  {IconButton, Avatar}  from "@material-ui/core"

export default function Header() {
    return (
        <div className="header">
             {/* left header logo with search*/}
                <div className="header__left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" 
                      className="img" alt="fb__logo"/>
                      {/* left header__left search log with input */}
                      <div className="left__searchIcon_search__container">
                          <SearchIcon className="searchIcon"/>
                          <input className="header__left__input"/>
                      </div>


                </div>
                   {/* center with icon */}
                   <div className="header__center">
                            <div className="HomeIcon">

                                <IconButton>
                                <HomeIcon/>
                                </IconButton>
                            </div>
                            <div className="LiveTvIcon">

                                
                            <IconButton>
                                        <LiveTvIcon/>
                                </IconButton>
                            </div>
                            <div className="PeopleIcon">

                                        <IconButton id="icon">
                                            <PeopleIcon/>
                                        </IconButton>
                            </div>
                            <div className="SportsEsportsIcon">
                                <IconButton>
                                    <SportsEsportsIcon/>
                                </IconButton>

                            </div>

                    </div>
                                   {/* end of center with icon */}
                                   {/* right menu */}
                            <div className="header__right">
                                 
                                  <div className="avatar" >
                                     <div>
                                     <IconButton>
                                          <Avatar/>
                                      </IconButton>
                                     </div>
                                      <h3 className="name">kirobezo</h3>
                                      
                                  </div>
                            </div>

        </div>
    )
}
