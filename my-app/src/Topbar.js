import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import { BsPerson } from 'react-icons/bs';
import { GiFire } from 'react-icons/gi';


function Topbar(props) {
    const { genres, language } = props;
    let genreHeaders = genres.map(g => {
        let hREF = '#' + g.ename;
        if (language === 'EN') {
            return (
                <Nav key={g.id}>
                    <Nav.Link href={hREF}>{g.ename}</Nav.Link>
                </Nav>
            );
          } else {
            return (
                <Nav key={g.id}>
                    <Nav.Link href={hREF}>{g.fname}</Nav.Link>
                </Nav>
            );
          }
    })
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <GiFire className="NavIcon" />
            EyyI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            {genreHeaders}
        </Navbar.Collapse>
        {/* <Nav>
            <Nav.Link href="#Profile">
                <BsPerson className="NavIcon" />
                Profile
            </Nav.Link>
        </Nav>   */}
        </Navbar>
    );
}

export default Topbar;
