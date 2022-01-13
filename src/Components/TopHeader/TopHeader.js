import React, { useState} from "react";
import {Link} from 'react-router-dom';
import NavProfileAccount from "../Navbar/NavProfileAccount";
import SidebarProfile from "../Sidebar/SidebarProfile";

function TopHeader() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
     setIsOpen(!isOpen);
   };

    return (
        <>
        <div className='top-header'>
            <div className='top-header-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-lg-3 col-md-3 col-xs-3 cols col-logo'>
                            <Link to="/">
                                <p className='logo'>khanaval</p>
                            </Link>
                        </div>
                        <div className='col col-lg-9 col-md-9 col-xs-9 cols col-nav'>
                            <div className='nav-wrapper'>
                                <ul>
                                    {/* <li><input type="text" name="search" placeholder='Search' className='form-control form-search' /></li>
                                    <li className='button btn-border-blue'>cart</li> */}
                                    <Link to="/login">
                                        <li className='button btn-blue'>masuk/daftar</li>
                                    </Link>
                                    {/* <li><NavProfileAccount toggle={toggle} /></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* sidebar menu for profile */}
        <SidebarProfile  isOpen={isOpen} toggle={toggle} />
        </>
    )
}

export default TopHeader;
