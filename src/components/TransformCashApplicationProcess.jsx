import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as TransformIcon } from "../assets/img/transform-icon.svg";

const StyledTabs = styled(Tabs)({
	"& .MuiTabs-indicator": {
		display: "none",
	},
});

const StyledTab = styled(Tab)({
	textTransform: "none",
	fontWeight: 600,
	fontSize: "0.875rem",
	color: "#3B82F6", // text-blue-600
	"&.Mui-selected": {
		color: "#3B82F6",
	},
	"&:not(:last-child)::after": {
		content: '"→"',
		marginLeft: "8px",
	},
});

const TransformCashApplicationProcess = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="bg-white p-8 font-sans max-w-6xl mx-auto">
			<div className="flex justify-between items-start mb-8">
				<div className="ml-20">
					<h1 className="text-center text-3xl font-bold text-blue-600 mb-2">
						Transform Your Cash Application Process
					</h1>
					<p className="text-gray-600">
						Achieve touchless posting for 90% of payments while still retaining
						control over exceptions that need a little extra human touch.
					</p>
				</div>
				{/* <Box sx={{ width: "100%", maxWidth: "60%" }}>
					<StyledTabs
						value={value}
						onChange={handleChange}
						aria-label="cash application process steps"
					>
						{steps.map((step, index) => (
							<StyledTab key={index} label={step} />
						))}
					</StyledTabs>
				</Box> */}
			</div>

			{/* Rest of the component remains the same */}
			<div className="flex">
				<div className="w-1/2 pr-8">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Instantly Capture All
						<br />
						Incoming Payments
					</h2>
					<p className="text-gray-600 mb-6">
						Still logging into each of your bank accounts and wrestling with
						spreadsheets? Growfin integrates with your bank accounts to extract
						every incoming transaction in real-time. It's almost magic.
					</p>
					<div className="flex items-center mb-4">
						<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
							<svg
								className="w-6 h-6 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
								/>
							</svg>
						</div>
						<div>
							<p className="font-semibold text-gray-800">
								Integrates with all major banks
							</p>
						</div>
					</div>
					<div className="flex items-center">
						<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
							<svg
								className="w-6 h-6 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<p className="font-semibold text-gray-800">
								100% Identification of all transactions
							</p>
						</div>
					</div>
				</div>
				<div className="w-1/2 relative">
					<div className="rounded-lg flex justify-center">
						{/* <div className="relative">
							<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center z-10 relative">
								<span className="text-2xl font-bold text-blue-600">
									Growfin
								</span>
							</div>
							{[0, 60, 120, 180, 240, 300].map((angle, index) => (
								<div
									key={index}
									className="absolute w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center"
									style={{
										top: `${Math.sin((angle * Math.PI) / 180) * 100 + 50}px`,
										left: `${Math.cos((angle * Math.PI) / 180) * 100 + 50}px`,
										transform: "translate(-50%, -50%)",
									}}
								>
									<svg
										className="w-8 h-8 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
										/>
									</svg>
								</div>
							))}
						</div> */}
						<TransformIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransformCashApplicationProcess;
