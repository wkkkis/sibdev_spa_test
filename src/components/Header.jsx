import React from 'react';

import { logOut } from '../redux/reducers/users-reducer';

import 'antd/dist/antd.css';

import { Layout } from 'antd';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';

const Header = ({logOut}) => {
    return (
        <div className="header">
            <Layout>
                <Layout.Header className="header__wrap text-18">
                    <div className="header__wrap__logo_with_link">
                        <div className="header_logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2629 23.7637L13.4634 33.2487V43.3086L32.2629 33.8236V23.7637Z" fill="#1390E5"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4634 14.2793L32.2629 23.7643V33.8242L13.4634 24.3392V14.2793Z" fill="#1180CB"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2629 4.79492L13.4634 14.28V24.3398L32.2629 14.8548V4.79492Z" fill="#35A2EC"/>
                            </svg>
                        </div>
                        <nav className="header_navlinks">
                            <div className="header_navlinks__link">
                                <NavLink exact to="/" activeClassName="active_link">Поиск</NavLink>
                            </div>
                            <div className="header_navlinks__link">
                                <NavLink exact to="/favorites" activeClassName="active_link">Избранное</NavLink>
                            </div>
                        </nav>
                    </div>
                    <div className="header__wrap__logout-btn" onClick={logOut}>
                            <span>Выйти</span>
                    </div>
                </Layout.Header>
            </Layout>
        </div>
    )
}

export default connect(
    null, {logOut}
)(Header);
