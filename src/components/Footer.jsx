import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { ReactComponent as LinkedIN } from "../assets/img/linkedIn.svg";
import { ReactComponent as Facebook } from "../assets/img/fb-icon.svg";
import { ReactComponent as XIcon } from "../assets/img/x-icon.svg";
import { ReactComponent as Instagram } from "../assets/img/insta.svg";
const Footer = () => {
	return (
		<footer className="bg-black text-white py-12 px-8">
			<Grid container spacing={4} className="max-w-7xl mx-auto">
				<Grid item xs={12} sm={6} md={2}>
					<Typography variant="h6" className="font-bold mb-4">
						Features
					</Typography>
					<ul>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Strategize
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Collaboration
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Tracking
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Reporting
							</Link>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} sm={6} md={2}>
					<Typography variant="h6" className="font-bold mb-4">
						What's in it for you?
					</Typography>
					<ul>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								CFOs and Directors of Finance
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Controllers
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								AR Managers
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Collection Teams
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								CSMs, AEs and AMs
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								By Tech Stack
							</Link>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} sm={6} md={2}>
					<Typography variant="h6" className="font-bold mb-4">
						Resources
					</Typography>
					<ul>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Blog
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Webinars
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								The Cashcows
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								ROI Calculator
							</Link>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} sm={6} md={2}>
					<Typography variant="h6" className="font-bold mb-4">
						Company
					</Typography>
					<ul>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								About us
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Careers
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Book a demo
							</Link>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} sm={6} md={2}>
					<Typography variant="h6" className="font-bold mb-4">
						Contact us
					</Typography>
					<ul>
						<li>
							<Typography variant="body2" sx={{ color: "white" }}>
								Email: hello@growfin.ai
							</Typography>
						</li>
						<li>
							<Typography variant="body2" sx={{ color: "white" }}>
								3082, Moser Way, Marietta, GA 30060
							</Typography>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} sm={6} md={2}>
					<Typography variant="h6" className="font-bold mb-4">
						Legal
					</Typography>
					<ul>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Terms of use
							</Link>
						</li>
						<li>
							<Link href="#" sx={{ color: "white", textDecoration: "none" }}>
								Privacy policy
							</Link>
						</li>
					</ul>
				</Grid>
			</Grid>
			<div className="max-w-7xl mx-auto mt-8 flex justify-between items-center">
				<Typography variant="body2" sx={{ color: "white" }}>
					&copy; 2023 Growfin. All rights reserved.
				</Typography>
				<div className="flex space-x-4">
					<Link href="#" sx={{ color: "white" }}>
						<LinkedIN className="h-6" />
					</Link>
					<Link href="#" sx={{ color: "white" }}>
						<Facebook className="h-6" />
					</Link>
					<Link href="#" sx={{ color: "white" }}>
						<XIcon className="h-6" />
					</Link>
					<Link href="#" sx={{ color: "white" }}>
						<Instagram className="h-6" />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
