import React from "react";
import HeroSection from "./components/HeroSection";
import EarlyCustomerAchievements from "./components/EarlyCustomerAchievements";
import CashApplicationPerfection from "./components/CashApplicationPerfection";
import TransformCashApplicationProcess from "./components/TransformCashApplicationProcess";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ScalableCashApp from "./components/ScalableCashApp";

function App() {
	return (
		<div>
			<HeroSection />
			<EarlyCustomerAchievements />
			<CashApplicationPerfection />
			<TransformCashApplicationProcess />
			<ScalableCashApp />
			<CTASection />
			<Footer />
		</div>
	);
}

export default App;
