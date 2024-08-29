import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { ReactComponent as SDIcon } from "../assets/img/SWD-icon.svg";
import { ReactComponent as Logo } from "../assets/img/Logo.svg"; // Import your logo image here

const HeroSection = () => {
	return (
		<div className="bg-gradient-to-r from-gradient-start to-gradient-end text-white py-16 px-8">
			<Grid
				container
				spacing={4}
				alignItems="center"
				justifyContent="space-between"
			>
				{/* Logo Section */}
				<Grid item>
					{/* <img src={Logo} alt="Logo" className="h-12 md:h-16" /> */}
					<Logo className="h-12 md:h-16" />
				</Grid>

				{/* Button Section */}
				<Grid item>
					<div className="flex space-x-4">
						<Button
							variant="contained"
							className="btn btn-contained bg-teal-500 text-white px-6 py-2 rounded-full"
						>
							Schedule a Demo
						</Button>
						<Button
							variant="outlined"
							className="btn btn-outlined border-cyan-400 text-cyan-400 px-6 py-2 rounded-full"
						>
							Request Access
						</Button>
					</div>
				</Grid>
			</Grid>

			<Grid container mt={"5rem"} spacing={4}>
				<Grid item xs={12} md={6}>
					<Typography variant="h2" component="h1" className="font-bold mb-4">
						Real-Time Cash Application Software
					</Typography>
					<Typography variant="body1" className="mb-8">
						Radically minimize manual intervention and achieve same-day closure
						with Growfin’s ML-powered Cash Application that delivers accurate,
						touchless posting.
					</Typography>
					<div className="flex space-x-4 mt-20 pt-8">
						<Button
							variant="contained"
							className="btn btn-contained bg-teal-500 text-white px-6 py-2 rounded-full"
						>
							Schedule a Demo
						</Button>
						<Button
							variant="outlined"
							className="btn btn-outlined border-cyan-400 text-cyan-400 px-6 py-2 rounded-full"
						>
							Request Access
						</Button>
					</div>
				</Grid>

				{/* Image Section */}
				<Grid
					item
					xs={12}
					md={6}
					className="flex justify-center md:justify-end"
				>
					{/* <img
						src={SDIcon}
						alt="Software Screenshot"
						className="max-w-full h-auto"
					/> */}
					<SDIcon className="max-w-full h-auto" />
				</Grid>
			</Grid>
		</div>
	);
};

export default HeroSection;
