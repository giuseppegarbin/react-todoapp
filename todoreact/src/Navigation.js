import React, {Component} from 'react';
import Avatar from './Avatar.js';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Todo</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Avatar />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavItem eventKey={3} href="#">Link</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;

