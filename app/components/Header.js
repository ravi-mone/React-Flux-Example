import React from 'react';
import { Link } from 'react-router';
const Header = function() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link activeClassName="active" className="navbar-brand"  to="/todo">TODO</Link>
                    <Link activeClassName="active" className="navbar-brand"  to="/user-list">Simple Ajax Demo</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;