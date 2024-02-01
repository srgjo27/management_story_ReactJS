import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function SideBar() {
    return (
        <Nav className="flex-column bg-light text-dark p-3 vh-100">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/management">
                <Nav.Link>Management Story</Nav.Link>
            </LinkContainer>
        </Nav>
    );
}

export default SideBar;