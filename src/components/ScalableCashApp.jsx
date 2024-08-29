import React from "react";
import { ReactComponent as OracleIcon } from "../assets/img/oracle-icon.svg";
import { ReactComponent as SapIcon } from "../assets/img/SAP-icon.svg";
import { ReactComponent as QuickBooksIcon } from "../assets/img/quickbooks-icon.svg";
import { ReactComponent as Soc2Icon } from "../assets/img/aicpa-icon.svg";
import { ReactComponent as GdprIcon } from "../assets/img/gdpr-icon.svg";
import { ReactComponent as BankOfAmericaIcon } from "../assets/img/bank-of-america-icon.svg";
import { ReactComponent as JpMorganIcon } from "../assets/img/jp-morgan-icon.svg";
import { ReactComponent as WellsFargoIcon } from "../assets/img/wells-fargo-icon.svg";

const ScalableCashApp = () => {
	const features = [
		{
			title: "Tight ERP Integration",
			description:
				"Keep your books accurate and up-to-date, and the auditors at bay with a seamless 2-way integration with your ERP.",
			logos: [
				{
					src: <OracleIcon className="h-8 object-contain" />,
					alt: "Oracle NetSuite",
				},
				{ src: <SapIcon className="h-8 object-contain" />, alt: "SAP" },
				{
					src: <QuickBooksIcon className="h-8 object-contain" />,
					alt: "QuickBooks",
				},
			],
		},
		{
			title: "Unmatched Security",
			description:
				"Stay confident and compliant with software that's approved by the world's most trusted certifications.",
			logos: [
				{ src: <Soc2Icon className="h-8 object-contain" />, alt: "SOC 2" },
				{ src: <GdprIcon className="h-8 object-contain" />, alt: "GDPR" },
			],
		},
		{
			title: "Wide Bank Coverage",
			description:
				"Out-of-the-box connection to all your bank accounts across geographies to read payments in real-time.",
			logos: [
				{
					src: <BankOfAmericaIcon className="h-8 object-contain" />,
					alt: "Bank of America",
				},
				{
					src: <JpMorganIcon className="h-8 object-contain" />,
					alt: "JPMorgan Chase & Co.",
				},
				{
					src: <WellsFargoIcon className="h-8 object-contain" />,
					alt: "Wells Fargo",
				},
			],
		},
	];

	return (
		<div className="bg-white p-8 font-sans">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold text-blue-600 text-center mb-2">
					Secure, Seamless, and Scalable
				</h1>
				<h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
					Cash Application
				</h2>
				<p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
					Integrate seamlessly with all your banks and ERP, and keep your
					auditors happy with state-of-the-art compliance and security measures.
				</p>

				<div className="space-y-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col md:flex-row md:items-center"
						>
							<div className="md:w-1/3">
								<h3 className="text-xl font-semibold text-blue-900 mb-2 md:mb-0">
									{feature.title}
								</h3>
							</div>
							<div className="flex items-center md:w-2/3">
								<p className="text-gray-600 mb-4 mr-4 w-400">
									{feature.description}
								</p>
								<div className="flex items-center gap-4">
									{feature.logos.map(
										(logo, logoIndex) =>
											// <img
											// 	key={logoIndex}
											// 	src={logo.src}
											// 	alt={logo.alt}
											// />
											logo.src
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ScalableCashApp;
