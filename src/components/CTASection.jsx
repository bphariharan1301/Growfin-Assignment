import React from "react";
import { Button, Typography } from "@mui/material";

const CTASection = () => {
	return (
		<div className="bg-gradient-to-r from-gradient-start to-gradient-end text-white py-16 px-8 flex flex-col items-center text-center rounded-lg mx-auto max-w-4xl mb-20">
			<h1 className="text-3xl font-bold text-white-600 mb-8">
				Embrace the Future of Cash Application Today
			</h1>
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
		</div>
	);
};

export default CTASection;
