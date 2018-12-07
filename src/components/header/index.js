import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export const Header = (props) => (
    <Navbar color={props.color} light expand="md">
        <NavbarBrand href="/" style={{ color: "#fff" }}>Football Player Finder</NavbarBrand>
    </Navbar>
);
