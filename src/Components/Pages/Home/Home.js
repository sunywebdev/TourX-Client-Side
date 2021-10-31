import React from "react";
import Banner from "../../Banner/Banner";
import DoYouKnow from "../../DoYouKnow/DoYouKnow";
import News from "../../News/News";
import Package from "../../Package/Package";
import Reviews from "../../Reviews/Reviews";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<DoYouKnow></DoYouKnow>
			<Package></Package>
			<Reviews></Reviews>
			<News></News>
		</div>
	);
};

export default Home;
