import React from "react";
import { Link } from "react-router-dom";
import { zoomInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
	zoomInDown: {
		animation: "x 2s",
		animationName: Radium.keyframes(zoomInDown, "zoomInDown")
	}
};

function Footer(props) {
	return (
		<StyleRoot style={styles.zoomInDown}>
			<div style={{display:"block"}}>
			<footer className="site-footer">
				<div className="container">
					<div className="row mt-5">
						<div className="col-2 text-wrap ml-5">
							<ul className="list-unstyled ">
								<li>
									<Link to="/home" className="footer_contact2">
										Home
									</Link>
								</li>
								<li>
									<Link to="/sport" className="footer_contact2">
										Sports
									</Link>
								</li>
								{/* <li>
									<Link to="/schedule" className="footer_contact2">
										Schedule
									</Link>
								</li> */}
							</ul>
						</div>
						<div className="col-3 mx-auto footer_contact">
							<h6>Summerlin/North Las Vegas</h6>
							<p>
								<i className="fa fa-phone" /> 702.454.7863 (ext 2){" "}
								<br />
								<i className="fa fa-envelope" /> lasvegas@nysnevada.com
							</p>
						</div>
						<div className="col-4 mx-auto, footer_contact">
							<h6>Henderson/South Las vegas</h6>
							<p>
								<i className="fa fa-phone" /> 702.454.7863 <br />
								<i className="fa fa-envelope" /> henderson@nysnevada.com
							</p>
						</div>
					</div>
				</div>
			</footer>
			</div>
		</StyleRoot>
	);
}

export default Footer;
