import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import useWindowDimensions from '../hooks/windowDimensions';

const MainNavbar = () => {
	const { height, width } = useWindowDimensions();
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const NavItemStyle = { display: 'flex', gap: '10px', alignItems: 'center', fontWeight: '400' };
	const LinkColor = { color: '#2D2D2D' };

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: width < 700 ? 'column' : 'row',
				backgroundColor: '#e9e9e9',
				width: '100vw',
				position: 'fixed',
				top: '0px',
				zIndex: 1,
				paddingTop: width < 700 ? 0 : '5vh',
			}}
		>
			<div style={{ color: '#2D2D2D', fontSize: '1.4em', fontWeight: '300', fontFamily: 'Raleway, sans-serif', marginRight: '60px' }}>Benjamin Michael Garner</div>
			<div style={{ color: '#2D2D2D', fontFamily: 'Raleway, sans-serif', display: 'flex', flexDirection: width < 700 ? 'column' : 'row', gap: width < 700 ? '3px' : '60px' }}>
				<a href="https://www.instagram.com/iambmg/?hl=en" class="nav-item1">
					<AiOutlineInstagram size={20} style={LinkColor} />
					<div style={LinkColor}> iambmg </div>
				</a>
				<a href="mailto:iambmg@me.com" class="nav-item1">
					<AiOutlineMail size={20} style={LinkColor} />
					<div style={LinkColor}>iambmg@me.com</div>
				</a>
				<a class="nav-item1" href="tel:778-385-2364">
					<AiOutlinePhone size={20} style={LinkColor} />
					<div style={LinkColor}>778-385-2364</div>
				</a>
			</div>
			<Navbar />
		</div>
	);
};

export default MainNavbar;
