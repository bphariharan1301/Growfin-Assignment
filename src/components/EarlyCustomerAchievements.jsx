import React from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import { ReactComponent as PersonIcon } from "../assets/img/Portrait_Business 1.svg";
import { ReactComponent as ClockDown } from "../assets/img/clock-down-icon.svg";
import { ReactComponent as DollarIcon } from "../assets/img/dollar-icon.svg";
import { ReactComponent as ImprovementIcon } from "../assets/img/improvement-icon.svg";
import { ReactComponent as SettingsIcon } from "../assets/img/settings-cycle-icon.svg";
import { ReactComponent as MindTickle } from "../assets/img/mind-tickle-icon.svg";
import { ReactComponent as Locus } from "../assets/img/locus-icon.svg";
import { ReactComponent as LetsTransport } from "../assets/img/lets-transport-icon.svg";

const EarlyCustomerAchievements = () => {
	return (
		<section className="bg-white py-12 px-8">
			<h1 className="text-3xl font-bold text-blue-600 text-center mb-2">
				What our Early Customers
			</h1>
			<h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
				have Already Achieved
			</h2>

			<Grid container spacing={4} className="max-w-7xl mx-auto">
				<Grid item xs={12} md={5}>
					<Box className="flex justify-center">
						<PersonIcon />
					</Box>
				</Grid>
				<Grid item xs={12} md={7}>
					<Box className="flex flex-col justify-center h-full space-y-4">
						<Box className="flex items-center space-x-2">
							<DollarIcon className="h-8 w-8 text-blue-700" />
							<Typography variant="h4" className="font-bold text-black">
								95%
							</Typography>
							<Typography variant="body1" className="text-gray-800 ml-2">
								Increase in same-day invoice posting
							</Typography>
						</Box>
						<Divider className="my-2" />
						<Box className="flex items-center space-x-2">
							<ClockDown className="h-8 w-8 text-blue-700" />
							<Typography variant="h4" className="font-bold text-black">
								70%
							</Typography>
							<Typography variant="body1" className="text-gray-800 ml-2">
								Reduction in posting delays and errors
							</Typography>
						</Box>
						<Divider className="my-2" />
						<Box className="flex items-center space-x-2">
							<SettingsIcon className="h-8 w-8 text-blue-700" />
							<Typography variant="h4" className="font-bold text-black">
								75%
							</Typography>
							<Typography variant="body1" className="text-gray-800 ml-2">
								Increase in automation for manual Cash Application
							</Typography>
						</Box>
						<Divider className="my-2" />
						<Box className="flex items-center space-x-2">
							<ImprovementIcon className="h-8 w-8 text-blue-700" />
							<Typography variant="h4" className="font-bold text-black">
								100%
							</Typography>
							<Typography variant="body1" className="text-gray-800 ml-2">
								Improvement in customer communication & experience
							</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>

			<Box className="mt-8 flex justify-center space-x-8">
				<MindTickle className="h-10" />
				<Locus className="h-10" />
				<LetsTransport className="h-10" />
			</Box>

			<Box className="mt-12 text-center">
				<Typography variant="body1" className="italic text-gray-600 mb-4">
					"Growfin's Cash Application has helped us streamline the entire cash
					application process with less manual intervention & timely posting of
					payments. We were able to achieve one of our key objectives within
					months of going live."
				</Typography>
				<Typography variant="body2" className="text-gray-800">
					- Rohit Munot, AR Manager, Locus
				</Typography>
			</Box>
		</section>
	);
};

export default EarlyCustomerAchievements;
