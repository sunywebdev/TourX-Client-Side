import { useEffect, useState } from "react";

const LoadDB = () => {
	const [data, setData] = useState();
	useEffect(() => {
		fetch("http://localhost:5000/events")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	return [data, setData];
};

export default LoadDB;
