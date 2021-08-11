import React, { Component } from "react";
import { Nav, NavbarToggler, Collapse, NavItem, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import Register from "./RegisterComponent";
import Login from "./LoginComponent";
import { slideInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
	slideInDown: {
		animation: "x 1s",
		animationName: Radium.keyframes(slideInDown, "slideInDown")
	}
};

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render() {
		return (
			// <StyleRoot navbar style={styles.slideInDown}>
			<div>
				<Navbar light expand="md">
					<div className="container flex-container">
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							{/* <> */}
							<div className="flex-container">
								<Nav>
									<NavItem>
										<NavLink className="nav-link" to="/home">
											<h5 className="nav-listing">Home</h5>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" to="/sport">
											<h5 className="nav-listing">Sports</h5>
										</NavLink>
									</NavItem>

									<NavItem className="nav_link">
										<Register />
									</NavItem>
									<NavItem className="nav_link">
										<Login />
									</NavItem>
								</Nav>
							</div>
							{/* </> */}
						</Collapse>
					</div>
				</Navbar>
			</div>
			// </StyleRoot>
		);
	}
}

export default Header;
