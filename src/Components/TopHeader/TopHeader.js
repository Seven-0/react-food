import React from 'react';
import {Link} from 'react-router-dom';

function TopHeader() {
    return (
        <div className='top-header'>
            <div className='top-header-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-lg-6 col-md-6 col-xs-6 cols col-logo'>
                            <Link to="/">
                                <p className='logo'>khanaval</p>
                            </Link>
                        </div>
                        <div className='col col-lg-6 col-md-6 col-xs-6 cols col-nav'>
                            <div className='nav-wrapper'>
                                <ul>
                                    <li><input type="text" name="search" placeholder='Search' className='form-control form-search'/></li>
                                    <li className='button btn-border-blue'>cart</li>
                                    <Link to="/login">
                                        <li className='button btn-blue'>masuk/daftar</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
