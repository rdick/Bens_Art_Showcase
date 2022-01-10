import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { AiOutlineInstagram } from 'react-icons/ai';
const MainNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const NavBrandStyle = { color: '#2D2D2D', fontSize: '1.4em', fontWeight: '400', fontFamily: 'Raleway, sans-serif' };
	const NavItemStyle = { color: '#2D2D2D', fontFamily: 'Raleway, sans-serif' };

	return (
		<div>
			<Navbar container fixed="top" expand="md">
				<NavbarBrand style={NavBrandStyle}>Ben Garner</NavbarBrand>
				<NavbarToggler onClick={handleToggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink style={NavItemStyle} href="/components/">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink style={NavItemStyle}>Gallery</NavLink>
						</NavItem>
						<NavItem>
							<NavLink style={NavItemStyle}>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink style={NavItemStyle}>Contact</NavLink>
						</NavItem>
						<NavItem>
							<AiOutlineInstagram style={NavItemStyle} />
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MainNavbar;
