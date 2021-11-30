import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Header() {
	return (
		<div>
			<Navbar bg="dark" variant={'dark'} expand="lg">
				<Navbar.Brand href="#">La Manu Box</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="mr-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link as={Link} to="/home">
							Accueil
						</Nav.Link>
						<Nav.Link as={Link} to="/booking">
							Réservations
						</Nav.Link>
						<Nav.Link as={Link} to="/about">
							A propos
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Nous Contacter
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
