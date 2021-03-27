import React from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap"
import { SiInstagram, SiLinkedin, SiGmail, SiFacebook, SiWhatsapp } from "react-icons/si";
import { Tooltip } from '@material-ui/core'


function MyNavbar() {

    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar-color" variant="dark" sticky="top">

            <Navbar.Brand href="https://cian-healthcare.github.io/" >
                Cian Healthcare Ltd
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/todo-app">
                            To-Do App
                    </Nav.Link>
                </Nav>
                
                <Nav>
                    <Tooltip title='Facebook' placement='bottom' arrow>
                        <Nav.Link href="https://www.facebook.com/CianHealthcareLtd/" className="navbar-icons">
                                <SiFacebook />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Linkedin' placement='bottom' arrow>
                        <Nav.Link href="https://www.linkedin.com/company/cian-healthcare/?originalSubdomain=in" className="navbar-icons">
                                <SiLinkedin />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='enquiry@cian.co' placement='bottom' arrow interactive>
                        <Nav.Link href="mailto:enquiry@cian.co" className="navbar-icons">
                                <SiGmail />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Whatsapp' placement='bottom' arrow interactive>
                        <Nav.Link href="https://wa.me/917620742114" className="navbar-icons">
                                <SiWhatsapp />
                        </Nav.Link>
                    </Tooltip>
                    {/* <Tooltip title='Instagram' placement='bottom' arrow>
                        <Nav.Link href="https://www.instagram.com/shlok__zanwar/" className="navbar-icons">
                                <SiInstagram />
                        </Nav.Link>
                    </Tooltip> */}
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default MyNavbar